// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...all types unchanged...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Litestack",
    badgeOuter: "Internal CRM",
    titleBefore: "",
    titleHighlight: "Litestack – Your Internal CRM Solution",
    titleAfter: "",
    subtitle:
      "Organize, track, and grow customer relationships with a streamlined CRM tailored for your team's workflow.",
    primaryCta: { label: "Get Started with Litestack", href: "/dashboard/overview" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "Litestack dashboard preview",
  },

  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" }
    ],
  },

  benefits: {
    eyebrow: "Why Litestack",
    heading: "A CRM your internal team will actually use",
    description:
      "Litestack centralizes your customer data and team workflows, so you can focus on what matters: growing relationships and pipeline.",
    items: [
      {
        icon: "Blocks",
        title: "Centralize Contacts",
        description: "Store all your customer details in one secure, accessible platform.",
      },
      {
        icon: "Sparkle",
        title: "Team Alignment",
        description: "Track every interaction and keep everyone on the same page.",
      },
      {
        icon: "LineChart",
        title: "Visual Sales Process",
        description: "Know exactly where each deal stands at a glance.",
      },
      {
        icon: "ShieldCheck",
        title: "For Internal Use",
        description: "Built for internal teams that need speed, simplicity, and reliability.",
      },
    ],
  },

  features: {
    eyebrow: "Features",
    heading: "Why Choose Litestack?",
    subtitle: "",
    items: [
      {
        icon: "ServerCog",
        title: "Centralize all your customer contacts in one secure platform.",
        description: "",
      },
      {
        icon: "MessageCircle",
        title: "Track every interaction and keep your team aligned.",
        description: "",
      },
      {
        icon: "Kanban",
        title: "Visualize your sales process and never miss a follow-up.",
        description: "",
      },
      {
        icon: "Flash",
        title: "Simple, fast, and built specifically for internal business needs.",
        description: "",
      }
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "Litestack CRM Services",
    subtitle: "More than a spreadsheet or inbox — practical features that help you and your team own every customer relationship.",
    items: [
      { title: "Contact Management", description: "Single source of truth for customers, deals, and activities.", pro: false },
      { title: "Interaction Timeline", description: "Keep a record of calls, emails, and meetings for every client.", pro: false },
      { title: "Pipeline Kanban", description: "Drag and drop deals through pipeline stages. Spot bottlenecks instantly.", pro: false },
      { title: "Role-Based Permissions", description: "Give your team the right access and accountability.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "Testimonials",
    heading: "What Teams Say About Litestack",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Sales Ops Team",
        role: "Acme Corp",
        comment:
          "Litestack keeps our customer data organized and our sales process on track. Our team can't imagine working without it.",
        rating: 5.0,
      },
      {
        image: "/team1.jpg",
        name: "Jane Lee",
        role: "Lead Account Manager",
        comment:
          "We moved from spreadsheets to Litestack and immediately gained clarity. It's fast, simple, and a big upgrade for our team.",
        rating: 4.9,
      },
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the Litestack team",
    members: [],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple Pricing for Teams",
    subtitle: "Start free, upgrade only when your team needs more power.",
    priceSuffix: "/month",
    plans: [],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Talk to the Litestack team",
    description: "Have a question or need help setting up? Reach out and we'll assist you.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Available", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Demo", "Getting Started", "Pricing", "Integration Request"],
    formSubmitLabel: "Contact Litestack",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Litestack Questions",
    items: [
      { question: "Is Litestack secure?", answer: "Yes. We use modern best practices for internal data and team privacy." },
      { question: "Can I import my existing customers?", answer: "Bulk import functionality is in our roadmap." },
      { question: "Does Litestack work for any business size?", answer: "Yes, it's simple for small teams and flexible for growing companies." }
    ],
  },

  footer: {
    brandName: "Litestack",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" }
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "FAQ", href: "#faq" }
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "© 2024 Litestack. Internal CRM for modern businesses.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "Litestack",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "Litestack dashboard preview" },
    features: [
      {
        title: "Internal CRM for Teams",
        description: "Manage customer data, interactions, and deals all from one dashboard.",
      },
      {
        title: "Sales Pipeline",
        description: "Gain real visibility into your sales and never let a deal slip by.",
      },
      {
        title: "Activity Logging",
        description: "Record every email, call, and meeting for your customer timeline.",
      },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Get Started",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;
export function getHomeContent(): HomeContent {
  return homeContent;
}