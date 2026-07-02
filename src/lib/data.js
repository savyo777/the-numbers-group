// Content for The Numbers Group — CPA. Real NAP + 5.0★/33 reviews are from the
// Google listing. Marketing stats & testimonials that can't be verified are tagged
// VERIFY — confirm with the firm before launch.

export const business = {
  name: 'The Numbers Group',
  full: 'The Numbers Group — Chartered Professional Accountants',
  tagline: 'Precision. Trust. Growth.',
  sub: 'Helping individuals and businesses make smarter financial decisions through expert accounting, taxation, bookkeeping, and advisory services.',
  phone: '(416) 568-6236',
  phoneHref: 'tel:+14165686236',
  email: 'hello@thenumbersgroup.ca', // VERIFY — placeholder
  address: '450 Bronte St. S #206',
  city: 'Milton, ON L9T 8T2',
  mapsQuery: '450 Bronte St S #206, Milton, ON L9T 8T2',
  rating: '5.0',
  reviews: '33',
  hours: [
    { d: 'Monday – Friday', h: '9:00 AM – 6:00 PM' },
    { d: 'Saturday', h: '10:00 AM – 5:00 PM' },
    { d: 'Sunday', h: 'Closed' },
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Insights', href: '#insights' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

/* ---------------- Trust bar (no fabricated client logos — real signals only) */
export const trustMarquee = [
  'Personal Tax', 'Corporate Tax', 'Bookkeeping', 'Payroll', 'HST/GST Filing',
  'CRA Audit Assistance', 'Tax Planning', 'Financial Statements', 'Incorporation', 'Business Advisory',
];

export const trustStats = [
  { value: 5.0, suffix: '★', decimals: 1, label: 'Google Rating', real: true },
  { value: 33, suffix: '', label: 'Five-Star Reviews', real: true },
  { value: 20, suffix: '+', label: 'Years Experience', real: false }, // VERIFY
  { value: 98, suffix: '%', label: 'Client Retention', real: false }, // VERIFY
];

/* ---------------- About */
export const values = [
  { icon: 'Scale', title: 'Integrity', body: 'Straight answers and audit-ready work. We’d rather lose a fee than cut a corner.' },
  { icon: 'Microscope', title: 'Precision', body: 'Every figure reconciled, every credit captured. Details are the whole job.' },
  { icon: 'HeartHandshake', title: 'Partnership', body: 'We measure success in years, not filings — your goals set our agenda.' },
];

// Honest timeline: a client's first year with the firm (no fabricated company history).
export const yearTimeline = [
  { q: 'Day 1', title: 'Onboarding & Catch-Up', body: 'We review your situation, collect records securely, and bring any late filings current.' },
  { q: 'Tax Season', title: 'Filing, Done Right', body: 'Personal and corporate returns prepared, reviewed with you, and filed on time.' },
  { q: 'Mid-Year', title: 'Planning Check-In', body: 'Instalments, salary vs. dividends, HST — we adjust the strategy while it still counts.' },
  { q: 'Year-End', title: 'Statements & Strategy', body: 'Clean financials, a clear tax plan for next year, and no surprises in April.' },
];

/* ---------------- Services (expandable) */
export const services = [
  { icon: 'User', title: 'Personal Tax Returns', body: 'T1 returns done right — every credit and deduction you’re entitled to.',
    details: ['T1 personal & family returns', 'Rental, investment & foreign income', 'Students, seniors & newcomers', 'Prior-year adjustments & late filings'] },
  { icon: 'Building2', title: 'Corporate Tax', body: 'T2 filings, planning and compliance that keep more inside the business.',
    details: ['T2 corporate returns', 'Salary vs. dividend planning', 'SR&ED & small-business deductions', 'CRA correspondence handled'] },
  { icon: 'BookOpen', title: 'Bookkeeping', body: 'Clean, reconciled books every month so you always know where you stand.',
    details: ['Monthly reconciliations', 'QuickBooks / Xero setup & cleanup', 'Receipt & document management', 'Monthly reporting you can read'] },
  { icon: 'Wallet', title: 'Payroll', body: 'Accurate, on-time payroll with all the remittances handled.',
    details: ['Payroll runs & direct deposit', 'Source deductions & remittances', 'T4s, T5s & ROEs', 'WSIB & EHT compliance'] },
  { icon: 'FileText', title: 'Financial Statements', body: 'Compilations and reporting that lenders, boards and the CRA trust.',
    details: ['Compilation engagements', 'Lender-ready statements', 'Budgets & projections', 'Year-end packages'] },
  { icon: 'Compass', title: 'Business Advisory', body: 'Strategic guidance on cash flow, structure and the decisions that matter.',
    details: ['Cash-flow & margin analysis', 'Pricing & growth decisions', 'Buy / sell & succession support', 'KPI dashboards'] },
  { icon: 'ShieldCheck', title: 'CRA Audit Assistance', body: 'Reviews, audits and back-filing — we deal with the CRA so you don’t have to.',
    details: ['Audit & review representation', 'Voluntary disclosures', 'Back-filing & arrears plans', 'Objections & appeals support'] },
  { icon: 'Target', title: 'Tax Planning', body: 'Proactive, year-round strategy to legally minimize what you owe.',
    details: ['Income splitting where allowed', 'RRSP / TFSA / FHSA strategy', 'Capital gains planning', 'Instalment optimization'] },
  { icon: 'Landmark', title: 'New Business Incorporation', body: 'Set up your corporation properly from day one.',
    details: ['Federal & Ontario incorporation', 'CRA program accounts (RC, RT, RP)', 'Share structure guidance', 'First-year compliance calendar'] },
  { icon: 'Percent', title: 'HST/GST Filing', body: 'Registrations, returns and input-tax credits — filed accurately, on schedule.',
    details: ['HST/GST registration', 'Monthly / quarterly / annual returns', 'Input tax credit maximization', 'Quick-method assessments'] },
];

/* ---------------- Why choose us */
export const whyChoose = [
  { icon: 'Award', title: 'Experienced CPAs', body: 'Chartered Professional Accountants held to the highest national standards.', span: 'lg:col-span-2' },
  { icon: 'Zap', title: 'Fast Turnaround', body: 'Clear timelines, quick responses, and filings that never wait until the deadline.' },
  { icon: 'Receipt', title: 'Transparent Pricing', body: 'Upfront quotes before work begins. No hourly mystery, no surprise invoices.' },
  { icon: 'UserRound', title: 'Personalized Service', body: 'A dedicated advisor who knows your name, your numbers and your goals.' },
  { icon: 'CalendarClock', title: 'Year-Round Support', body: 'Questions in July matter too. We’re here all twelve months, not just April.' },
  { icon: 'Lock', title: 'Secure Digital Process', body: 'Encrypted document sharing and e-signatures — convenient and confidential.', span: 'lg:col-span-2' },
];

/* ---------------- Industries */
export const industries = [
  { icon: 'HardHat', title: 'Construction & Trades' },
  { icon: 'HeartPulse', title: 'Healthcare' },
  { icon: 'Home', title: 'Real Estate' },
  { icon: 'ShoppingBag', title: 'Retail & E-Commerce' },
  { icon: 'UtensilsCrossed', title: 'Restaurants' },
  { icon: 'Cpu', title: 'Technology' },
  { icon: 'Factory', title: 'Manufacturing' },
  { icon: 'Briefcase', title: 'Professional Services' },
  { icon: 'UserCheck', title: 'Self-Employed' },
];

/* ---------------- Stats (VERIFY all but the 5.0 rating) */
export const stats = [
  { value: 5000, suffix: '+', label: 'Tax Returns Filed', verify: true },
  { value: 98, suffix: '%', label: 'Client Retention', verify: true },
  { value: 20, suffix: '+', label: 'Years Experience', verify: true },
  { value: 100, suffix: '%', label: 'Commitment', verify: false },
];

/* ---------------- Process (4 steps) */
export const processSteps = [
  { n: '01', icon: 'CalendarCheck', title: 'Book Consultation', body: 'A free, no-obligation conversation about your situation and goals.' },
  { n: '02', icon: 'UploadCloud', title: 'Upload Documents', body: 'Share records through our secure, encrypted portal — no shoebox required.' },
  { n: '03', icon: 'FileCog', title: 'We Prepare Everything', body: 'Books, returns and statements prepared and double-checked by a CPA.' },
  { n: '04', icon: 'BadgeCheck', title: 'Review & File', body: 'We walk you through it in plain English, you approve, we file. Done.' },
];

/* ---------------- Financial insights (interactive) */
export const insights = [
  {
    key: 'tax', icon: 'PiggyBank', title: 'Tax Savings',
    headline: 'Most people leave money on the table.',
    body: 'Missed credits, wrong structures, poorly-timed withdrawals — small oversights compound. We review the full picture and capture what software can’t see.',
    points: ['Credits & deductions review', 'Income timing & splitting', 'Corporate structure optimization'],
    chart: 'bars-compare', // self-filed vs CPA-optimized
  },
  {
    key: 'planning', icon: 'LineChart', title: 'Financial Planning',
    headline: 'A plan turns income into progress.',
    body: 'RRSP vs. TFSA vs. paying down the mortgage — the right order depends on your numbers. We model the options so each dollar goes where it works hardest.',
    points: ['Registered-account strategy', 'Major-purchase planning', 'Retirement projections'],
    chart: 'line-up',
  },
  {
    key: 'growth', icon: 'TrendingUp', title: 'Business Growth',
    headline: 'Growth you can see coming.',
    body: 'Margins, pricing, hiring timing — your statements already hold the answers. We translate them into decisions that scale the business safely.',
    points: ['Margin & pricing analysis', 'Hiring & expansion timing', 'KPI dashboards'],
    chart: 'bars-up',
  },
  {
    key: 'cash', icon: 'Droplets', title: 'Cash Flow',
    headline: 'Profit is opinion. Cash is fact.',
    body: 'Seasonality, receivables, instalments — we smooth the peaks and valleys so payroll is never a cliffhanger and growth is never starved.',
    points: ['13-week cash forecasts', 'Receivable & payable rhythm', 'Instalment planning'],
    chart: 'wave',
  },
];

/* ---------------- Testimonials — VERIFY: placeholders. Replace with the firm's real
   Google reviews (there are 33) before launch. Do not publish fabricated named reviews. */
export const testimonials = [
  { quote: 'They found deductions our previous accountant completely missed — and explained every one. The most on-top-of-it CPA we’ve worked with.', name: 'Sarah M.', role: 'Small Business Owner', verify: true },
  { quote: 'Incorporating felt overwhelming until The Numbers Group handled the whole thing. Fast, clear, and genuinely stress-free.', name: 'David R.', role: 'Founder', verify: true },
  { quote: 'Our books have never been cleaner. We finally understand our numbers and make decisions with real confidence.', name: 'Priya K.', role: 'Restaurant Owner', verify: true },
  { quote: 'Responsive, precise and truly invested in our growth. Five stars honestly doesn’t feel like enough.', name: 'Marcus T.', role: 'Consultant', verify: true },
];

/* ---------------- FAQ */
export const faqs = [
  { q: 'How much do your services cost?', a: 'It depends on scope — a personal return is very different from full-cycle corporate accounting. We give clear, upfront pricing after a short consultation, with no surprise invoices. The first conversation is always free.' },
  { q: 'Do I really need a CPA, or just a tax preparer?', a: 'A CPA does far more than file a return — we plan ahead, catch what software misses, represent you with the CRA, and give advice you can build a business on. For anything beyond a simple return, the value shows quickly.' },
  { q: 'What does corporate accounting include?', a: 'Typically bookkeeping, payroll, HST/GST, T2 corporate tax, financial statements and year-round advice — scaled to your size. We tailor the package so you only pay for what your business actually needs.' },
  { q: 'I’m behind on filings / dealing with the CRA. Can you help?', a: 'Yes — this is one of the most common reasons people call us. We handle back-filing, reviews and audits, correspond with the CRA on your behalf, and get you compliant with minimal stress.' },
  { q: 'Can you take over payroll from our current provider?', a: 'Absolutely. We migrate your employee records, set up remittance schedules, and run a parallel cycle so nothing is missed in the switch. Most transitions take under two weeks.' },
  { q: 'What’s the difference between bookkeeping and accounting?', a: 'Bookkeeping records the day-to-day transactions; accounting interprets them — statements, taxes, planning and advice. We do both, so nothing falls through the cracks between them.' },
  { q: 'When should I incorporate?', a: 'Often once your business income is steady and exceeds what you personally draw, incorporation can offer tax deferral and liability benefits. We’ll model your specific numbers so it’s an informed decision, not a guess.' },
];
