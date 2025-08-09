export type SocialLink = {
  name: string;
  url: string;
};

export type ProblemSolution = {
  id: string;
  problem: string;
  solution: string;
  href: string;
};

export type HowItWorksStep = {
  id: string;
  title: string;
  description: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  outcome: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const site = {
  name: "VicRodTech",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline:
    "Custom‑coded websites that make your business look pro — and convert.",
  subtagline:
    "One clear package, fast delivery, zero stress. I build, host, and improve your site like clockwork.",
  hero: {
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See Services", href: "#services" },
  },
  offer: {
    bullets: [
      "Modern redesigns for outdated sites",
      "Fast performance, clean UX",
      "SEO basics baked in",
      "Analytics & handoff docs",
      "Clear scope; rapid iterations",
    ],
    included: [
      "Up to 5 pages",
      "2 rounds of revisions per page",
      "Typical task turnaround 48–72h",
    ],
  },
  howItWorks: {
    steps: [
      {
        id: "step-1",
        title: "15‑min Discovery",
        description: "Quick goals & fit",
      },
      {
        id: "step-2",
        title: "Pay & Onboard",
        description: "Instant access; form + assets upload",
      },
      {
        id: "step-3",
        title: "Add Tasks in Trello",
        description: "One active request at a time",
      },
      {
        id: "step-4",
        title: "Build & Review",
        description: "Typical task turnaround 48–72h",
      },
    ] as HowItWorksStep[],
    bigTaskNote:
      "What if a task is big? We’ll split it into smaller cards and set expectations.",
  },
  problemsSolutions: [
    {
      id: "ps-1",
      problem: "Confusing builders & slow results.",
      solution:
        "A single streamlined build process with 48–72h turnarounds per task.",
      href: "#how-it-works",
    },
    {
      id: "ps-2",
      problem: "Scope creep & unclear pricing.",
      solution: "Fixed package, clear limits, one active request at a time.",
      href: "#pricing",
    },
    {
      id: "ps-3",
      problem: "No visibility on progress.",
      solution: "Trello board + simple status: backlog → active → review → done.",
      href: "#how-it-works",
    },
    {
      id: "ps-4",
      problem: "Stuck after launch.",
      solution: "Pause/cancel anytime; optional maintenance.",
      href: "#services",
    },
  ] as ProblemSolution[],
  services: [
    { id: "svc-1", title: "New site build / Redesign", outcome: "A modern, fast site that feels current and trustworthy." },
    { id: "svc-2", title: "Landing pages", outcome: "Focused pages designed to convert visitors into leads." },
    { id: "svc-3", title: "Speed optimization", outcome: "Improve Core Web Vitals for better UX and SEO." },
    { id: "svc-4", title: "Basic SEO setup", outcome: "Meta, sitemap, clean structure, and best‑practice markup." },
    { id: "svc-5", title: "Analytics setup", outcome: "Track key actions and understand performance." },
    { id: "svc-6", title: "Copy polish (light)", outcome: "Tighten wording for clarity and conversion." },
    { id: "svc-7", title: "Blog setup", outcome: "Publish articles that boost visibility and trust." },
    { id: "svc-8", title: "Booking/contact integration", outcome: "Easy ways for visitors to book or contact you." },
    { id: "svc-9", title: "Maintenance (optional add‑on)", outcome: "Keep the site updated and healthy." },
  ] as ServiceItem[],
  pricing: {
    name: "Launch Website Package",
    bullets: [
      "Up to 5 pages",
      "Mobile‑first",
      "Basic SEO",
      "One active request at a time",
      "48–72h per task",
      "Pause/cancel anytime",
    ],
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID ?? "price_XXXX",
    portalUrl: process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL ?? "",
    reassurance: "No contracts. Pause/cancel anytime via billing portal.",
  },
  about: {
    name: "Vic",
    avatar: "/favicon.svg",
    bio:
      "I’m Vic. IT support + web dev background. I redesign outdated sites into fast, modern experiences. Clear scope, quick delivery, calm communication.",
    socials: [
      { name: "X", url: "https://x.com/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/" },
      { name: "GitHub", url: "https://github.com/" },
    ] as SocialLink[],
  },
  faq: [
    {
      id: "faq-1",
      question: "What’s ‘one active request’?",
      answer:
        "One task worked on at a time. Add unlimited tasks to the backlog; we complete the active one in ~48–72h.",
    },
    {
      id: "faq-2",
      question: "How fast is onboarding?",
      answer: "Instant after payment; you’ll get a form and Trello access.",
    },
    {
      id: "faq-3",
      question: "Can I pause or cancel?",
      answer: "Yes, anytime via the billing portal.",
    },
    {
      id: "faq-4",
      question: "What if my request is large?",
      answer:
        "We split into smaller deliverables and set expected dates.",
    },
    {
      id: "faq-5",
      question: "Do you offer maintenance?",
      answer:
        "Yes, optional add‑on for updates & fixes.",
    },
  ] as FaqItem[],
  organizationJsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VicRodTech',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    sameAs: [
      'https://x.com/',
      'https://www.linkedin.com/',
      'https://github.com/',
    ],
  },
} as const;

export type SiteConfig = typeof site;


