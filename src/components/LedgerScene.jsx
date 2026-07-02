import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Persistent scroll-driven 3D backdrop — an emerald/gold "ledger crystal"
 * (faceted icosahedron + wireframe shell + orbiting particle ring) that travels,
 * scales and turns gold as the visitor scrolls the page.
 *
 * Perf recipe (hard-won): vanilla three, DPR 1, 30fps cap, pause when tab hidden,
 * ONE unconditional render before the loop (no first-paint black), light geometry
 * (detail ≤2, ≤400 particles), additive glow — no fullscreen fragment shaders.
 */

// Scroll keyframes: [progress, x, y, z, scale, goldMix]
const KEYS = [
  [0.0,   2.6, -0.1, 0,    1.05, 0.15],
  [0.16, -2.8,  0.3, -0.6, 0.85, 0.3],
  [0.36,  0.0,  0.1, -1.6, 0.62, 0.5],
  [0.58,  2.8,  0.0, -0.4, 0.9,  0.7],
  [0.8,  -2.6,  0.2, -0.8, 0.78, 0.85],
  [1.0,   0.0, -0.5, 0.2,  1.15, 1.0],
];

function sampleKeys(p) {
  if (p <= KEYS[0][0]) return KEYS[0].slice(1);
  for (let i = 0; i < KEYS.length - 1; i++) {
    const a = KEYS[i], b = KEYS[i + 1];
    if (p >= a[0] && p <= b[0]) {
      const t = (p - a[0]) / (b[0] - a[0]);
      const e = t * t * (3 - 2 * t); // smoothstep between keyframes
      return a.slice(1).map((v, k) => v + (b[k + 1] - v) * e);
    }
  }
  return KEYS[KEYS.length - 1].slice(1);
}

export default function LedgerScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      canvas.style.display = 'none';
      return;
    }
    renderer.setPixelRatio(1);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(45, 1, 0.1, 60);
    cam.position.z = 7;

    // --- crystal: fresnel glass core
    const uniforms = { uGold: { value: 0.2 } };
    const coreMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms,
      vertexShader: `
        varying vec3 vN; varying vec3 vV;
        void main(){
          vN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vV = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        precision mediump float;
        varying vec3 vN; varying vec3 vV; uniform float uGold;
        void main(){
          float f = pow(1.0 - max(dot(vN, vV), 0.0), 2.4);
          vec3 emerald = vec3(0.20, 0.84, 0.65);
          vec3 gold    = vec3(0.91, 0.79, 0.45);
          vec3 rim  = mix(emerald, gold, uGold);
          vec3 core = mix(vec3(0.02, 0.10, 0.08), vec3(0.10, 0.08, 0.03), uGold);
          gl_FragColor = vec4(mix(core, rim, f), f * 0.85 + 0.05);
        }`,
    });
    const crystal = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 1), coreMat);
    scene.add(crystal);

    // wireframe shell for the "ledger lattice" structure
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x34d6a6, wireframe: true, transparent: true, opacity: 0.28,
      blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.78, 1), wireMat);
    scene.add(shell);

    // orbiting particle ring (emerald→gold specks)
    const N = 380;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const cEm = new THREE.Color(0x34d6a6);
    const cGd = new THREE.Color(0xe7c983);
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const r = 2.5 + (i % 7) * 0.14 + Math.sin(i * 12.9898) * 0.18;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = Math.sin(a * 2.0 + i) * 0.42;
      pos[i * 3 + 2] = Math.sin(a) * r * 0.55;
      const c = (i % 5 === 0) ? cGd : cEm;
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const points = new THREE.Points(pGeo, new THREE.PointsMaterial({
      size: 0.035, vertexColors: true, transparent: true, opacity: 0.75,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    }));
    scene.add(points);

    const group = new THREE.Group();
    group.add(crystal, shell, points);
    scene.add(group);

    // --- state
    let targetP = 0, curP = 0;
    let mx = 0, my = 0, smx = 0, smy = 0;

    const readScroll = () => {
      const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
      targetP = Math.min(window.scrollY / max, 1);
    };
    const onMouse = (e) => {
      mx = (e.clientX / innerWidth - 0.5);
      my = (e.clientY / innerHeight - 0.5);
    };
    const resize = () => {
      renderer.setSize(innerWidth, innerHeight, false);
      cam.aspect = innerWidth / innerHeight;
      cam.updateProjectionMatrix();
    };
    resize();
    readScroll();
    addEventListener('resize', resize, { passive: true });
    addEventListener('scroll', readScroll, { passive: true });
    addEventListener('mousemove', onMouse, { passive: true });

    const apply = (p, t) => {
      const [x, y, z, s, gold] = sampleKeys(p);
      group.position.set(x + smx * 0.5, y - smy * 0.35, z);
      group.scale.setScalar(s);
      // continuous idle spin + scroll-coupled rotation so scrolling visibly turns it
      group.rotation.y = t * 0.12 + p * Math.PI * 2.2 + smx * 0.25;
      group.rotation.x = Math.sin(t * 0.18) * 0.12 + p * 0.7 - smy * 0.2;
      points.rotation.y = t * 0.05 + p * 1.4;
      uniforms.uGold.value = gold;
      group.position.y += Math.sin(t * 0.55) * 0.08; // gentle float
    };

    // one unconditional frame so the canvas is never blank
    apply(targetP, 0);
    renderer.render(scene, cam);

    if (reduce) return () => renderer.dispose();

    let raf, last = 0;
    const loop = (t) => {
      raf = requestAnimationFrame(loop);
      if (document.hidden) return;
      if (t - last < 32) return; // 30fps cap
      last = t;
      const s = t * 0.001;
      curP += (targetP - curP) * 0.07; // eased scroll follow
      smx += (mx - smx) * 0.05;
      smy += (my - smy) * 0.05;
      apply(curP, s);
      renderer.render(scene, cam);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', resize);
      removeEventListener('scroll', readScroll);
      removeEventListener('mousemove', onMouse);
      [crystal.geometry, shell.geometry, pGeo].forEach((g) => g.dispose());
      [coreMat, wireMat, points.material].forEach((m) => m.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
