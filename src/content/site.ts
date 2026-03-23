export const site = {
  name: "Sweepsless in Seattle",
  tagline: "Cleaning made charming.",
  phoneDisplay: "(206) 555-0142",
  phoneTel: "+12065550142",
  email: "hello@sweepslessinseattle.com",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  addresses: [
    { line1: "Serving Seattle & the Eastside", line2: "Washington" },
  ],
  hours: "Office hours: Monday\u2013Friday, 8 am\u20135 pm",
} as const;

export const hero = {
  title: "Come home to calm, clean floors",
  subtitle: "Cleaning made",
  subtitleAccent: "charming",
  cta: "Get a fast, free quote",
  videoPoster:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
  testimonials: [
    {
      quote:
        "They\u2019re consistent, kind, and the floors actually look maintained\u2014not just \u201cwiped.\u201d Pricing was clear before the first visit.",
      author: "Jordan M., Capitol Hill",
    },
    {
      quote:
        "We needed a one-time reset before family flew in. The crew was on time, thorough, and worked around our dog without drama.",
      author: "Priya K., Ballard",
    },
    {
      quote:
        "After our remodel, dust was everywhere. Sweepsless handled the post-construction pass and the place finally felt livable again.",
      author: "Alex R., Fremont",
    },
    {
      quote:
        "Biweekly cleans keep our busy house sane. Communication is easy and they remember the little notes we leave.",
      author: "Sam T., Green Lake",
    },
  ],
} as const;

export const trustBullets = [
  { id: "contracts", label: "No contracts", short: "Book on your terms" },
  { id: "schedule", label: "Flexible scheduling", short: "We adapt when life shifts" },
  { id: "custom", label: "Customized cleanings", short: "Your priorities, your home" },
  { id: "team", label: "Vetted employees", short: "Trained, insured teams" },
  { id: "happy", label: "Satisfaction promise", short: "We make it right" },
] as const;

export const differenceCards = [
  {
    id: "contracts",
    title: "No contracts",
    body: "We earn visits by doing great work\u2014not paperwork. Whether you want a single deep clean or an ongoing rhythm, you stay in control.",
  },
  {
    id: "schedule",
    title: "Flexible scheduling",
    body: "Need to move a day or squeeze in a last-minute reset? We do our best to accommodate when capacity allows, with clear windows and updates.",
  },
  {
    id: "custom",
    title: "Customized cleanings",
    body: "Homes aren\u2019t identical. We align on priorities\u2014kitchens, baths, floors, extras\u2014and adjust as seasons and life change.",
  },
  {
    id: "team",
    title: "Vetted, in-house teams",
    body: "You\u2019ll know who\u2019s in your home: background-checked professionals, insured operations, and consistent quality standards.",
  },
  {
    id: "happy",
    title: "Satisfaction promise",
    body: "If something misses the mark, tell us. We\u2019ll return to address it. Your peace of mind matters as much as the shine.",
  },
] as const;

export const servicesIntro = {
  eyebrow: "Built around your week",
  title: "Cleaning that fits Seattle life",
  heading: "Our services",
  description:
    "From steady upkeep to one-time resets, we focus on high-traffic areas, healthy surfaces, and the details that make a home feel cared for.",
} as const;

export const services = [
  {
    id: "regular",
    slug: "/services/regular",
    name: "Regular housekeeping",
    image: "https://images.unsplash.com/photo-1628177142890-624252228b04?w=1200&q=80",
    blurb: "Weekly, biweekly, or monthly visits that keep kitchens, baths, and floors on a dependable cadence\u2014so weekends aren\u2019t spent catching up.",
    longDescription: "Our recurring cleaning service is designed around your schedule. We track custom notes per visit, send reminders before each appointment, and keep your home in a consistent state of clean. Most clients choose biweekly, but weekly and monthly cadences are available too.",
    includes: [
      "Kitchen countertops, stovetop, sink, and appliance exteriors",
      "Bathroom sanitization\u2014toilets, showers, mirrors, floors",
      "Dusting all reachable surfaces and ceiling fans",
      "Vacuuming and mopping hard floors throughout",
      "Bed making and general tidying of living spaces",
      "Trash and recycling taken to bins",
    ],
  },
  {
    id: "once",
    slug: "/services/once",
    name: "One-time / as-needed",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&q=80",
    blurb: "Perfect before guests, after travel, or when you just need a reset. Tell us your must-hits and we\u2019ll prioritize there first.",
    longDescription: "Sometimes you need a single visit without committing to a schedule. Hosting family this weekend? Just back from a long trip? We\u2019ll focus on the areas you care about most and leave your space guest-ready or simply livable again.",
    includes: [
      "Priority cleaning of the rooms you specify",
      "Full kitchen and bathroom passes",
      "Floor care throughout (vacuum, mop, spot treatment)",
      "Surface dusting and wipe-down",
      "Flexible add-ons like inside the fridge or oven",
      "Same-week availability when schedule allows",
    ],
  },
  {
    id: "deep",
    slug: "/services/deep",
    name: "Deep / spring cleaning",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
    blurb: "Baseboards, bathrooms, inside appliances (as agreed), and the spots daily tidying skips\u2014ideal for season changes or a fresh start.",
    longDescription: "A deep clean reaches the corners that regular maintenance doesn\u2019t. Think window tracks, light fixtures, baseboards, behind furniture, and inside appliances. It\u2019s the full reset\u2014ideal seasonally, before a big event, or to kick off a new cleaning routine.",
    includes: [
      "Everything in a regular clean, plus\u2026",
      "Baseboards, door frames, and light switch plates",
      "Window sills and tracks",
      "Inside oven and microwave",
      "Inside refrigerator (shelves and drawers)",
      "Detailed bathroom grout and tile scrub",
      "Behind and under furniture where accessible",
    ],
  },
  {
    id: "move",
    slug: "/services/move",
    name: "Move-in / move-out",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    blurb: "Empty-home passes that help you hand off keys with confidence\u2014or walk into a place that feels move-in ready, top to bottom.",
    longDescription: "When the furniture is out, every scuff and dust bunny is visible. Our move-in/move-out service tackles the empty space thoroughly\u2014inside cabinets, closet shelves, appliance interiors, and all the surfaces that need to be spotless for inspections or new beginnings.",
    includes: [
      "All interior cabinets and drawers wiped clean",
      "Inside all appliances (oven, fridge, dishwasher)",
      "Closet shelves and rods dusted/wiped",
      "Light fixtures and ceiling fan blades",
      "Baseboards and door frames throughout",
      "Full floor care including edges and corners",
      "Window sills, tracks, and interior glass",
    ],
  },
  {
    id: "post",
    slug: "/services/post",
    name: "Post-construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    blurb: "Fine dust and debris don\u2019t belong in your air. We coordinate detailed cleanup so you can enjoy the remodel\u2014not chase drywall dust.",
    longDescription: "After a renovation, fine dust settles on every surface, inside every vent, and behind every outlet cover. Our post-construction team handles the heavy cleanup so you can actually enjoy the finished work. We coordinate with contractors to schedule the final pass.",
    includes: [
      "Fine dust removal from all surfaces, walls, and ceilings",
      "Interior window cleaning (including new installations)",
      "Cabinet, shelf, and drawer interiors wiped",
      "HVAC vent covers cleaned",
      "Detailed floor cleaning (tile, hardwood, or carpet)",
      "Fixture and hardware polish",
      "Debris removal and final walk-through",
    ],
  },
] as const;

export type Service = (typeof services)[number];

export const reviewsHeading = {
  eyebrow: "Word on the street",
  title: "What neighbors say",
} as const;

export const curatedReviews = [
  {
    name: "Morgan L.",
    neighborhood: "Capitol Hill",
    excerpt: "Clear communication, on-time arrivals, and they actually listen to the \u201cplease focus here\u201d list. Our townhome has never stayed this tidy between visits.",
  },
  {
    name: "Chris P.",
    neighborhood: "Ballard",
    excerpt: "We tried a few services\u2014this crew is the first that felt consistent. Same attention to the kitchen every time, which is where we care most.",
  },
  {
    name: "Ana V.",
    neighborhood: "Fremont",
    excerpt: "Move-out clean helped us get the full deposit back. They hit cabinets, tracks, and corners I would have rushed past.",
  },
  {
    name: "Taylor S.",
    neighborhood: "Green Lake",
    excerpt: "Deep clean before the holidays made the whole house feel lighter. Friendly team, no weird surprises on the invoice.",
  },
  {
    name: "Riley D.",
    neighborhood: "Wallingford",
    excerpt: "Post-renovation dust was brutal. Two passes later, air filters finally stopped clogging overnight. Huge relief.",
  },
  {
    name: "Jamie H.",
    neighborhood: "Queen Anne",
    excerpt: "As-needed bookings work for our irregular schedule. Easy to reschedule in the portal when work trips pop up.",
  },
  {
    name: "Sam T.",
    neighborhood: "Beacon Hill",
    excerpt: "We\u2019ve been using Sweepsless biweekly for over a year. The same team comes every time and they remember our preferences. It\u2019s like clockwork.",
  },
  {
    name: "Priya K.",
    neighborhood: "Columbia City",
    excerpt: "Booked a one-time before our housewarming. The place looked better than when we moved in. Several guests asked who our cleaners were.",
  },
] as const;

export const processSection = {
  eyebrow: "How it works",
  title: "Simple from first message to spotless",
  intro: "You\u2019ll always know what to expect: a quick scope, a plan that matches your home, and steady updates as visits approach.",
  learnMoreHref: "/contact",
  steps: [
    {
      title: "Tell us what you need",
      body: "Share home size, priorities, and timing. We\u2019ll recommend a cadence or a one-time scope that fits.",
    },
    {
      title: "Consultation & estimate",
      body: "We clarify access, pets, supplies, and any sensitivities. You get transparent pricing\u2014no mystery add-ons.",
    },
    {
      title: "Your cleaning plan",
      body: "We document room-by-room notes so teams arrive aligned. Adjust anytime as seasons or routines change.",
    },
    {
      title: "Service day",
      body: "Trained cleaners arrive with supplies, follow your plan, and respect your space like it\u2019s their own.",
    },
    {
      title: "Quality check & feedback",
      body: "Walk through if you like; we want the details right. Tell us fast\u2014we\u2019ll make it right.",
    },
  ],
} as const;

export const familyBand = {
  title: "Local, accountable, people-first",
  body: "Sweepsless in Seattle is built for neighbors who want dependable cleaning without the runaround. We invest in training, fair scheduling, and communication\u2014because trust is part of the service.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
  cta: "Request your free quote",
} as const;

export const aboutPage = {
  heroTitle: "Our story",
  heroSubtitle: "Built by neighbors, for neighbors.",
  story: [
    "Sweepsless in Seattle started with a simple observation: finding a cleaning service that\u2019s both dependable and pleasant to work with shouldn\u2019t be this hard.",
    "We built our company around the things that frustrated us as customers\u2014rigid contracts, inconsistent teams, surprise charges, and poor communication. Every policy we have exists because we experienced the opposite elsewhere and decided to fix it.",
    "Today we serve homes across Seattle and the Eastside with trained, vetted teams who treat your space with genuine care. We\u2019re not trying to be the biggest cleaning company in the city. We\u2019re trying to be the one you actually recommend to friends.",
  ],
  values: [
    { title: "Consistency over flash", body: "The same high standard, every visit. We track notes, preferences, and feedback so nothing slips." },
    { title: "Honest communication", body: "Clear pricing, real arrival windows, and fast responses. If something changes, you\u2019ll know." },
    { title: "People matter", body: "Our cleaners earn fair wages, work reasonable hours, and receive ongoing training. Happy teams do better work." },
    { title: "Local roots", body: "We live here too. We care about the neighborhoods we serve and the reputation we\u2019re building in them." },
  ],
} as const;

export const contactPage = {
  heroTitle: "Get in touch",
  heroSubtitle: "Questions, quotes, or just saying hello\u2014we\u2019re here.",
  intro: "The fastest way to get a quote is to call or email. We aim to respond within a few hours during business days. For scheduling or service questions, reach out anytime.",
} as const;

export const faqItems = [
  {
    question: "How much does house cleaning cost in Seattle?",
    answer: "Pricing depends on home size, service type, and frequency. A standard biweekly clean for a 2-bedroom home typically starts around $150\u2013$200 per visit. We provide a clear estimate before your first appointment with no hidden fees.",
  },
  {
    question: "Do I need to sign a contract?",
    answer: "No. Sweepsless in Seattle operates without contracts. You can book a single visit or set up a recurring schedule and cancel or pause anytime\u2014no penalties, no commitments.",
  },
  {
    question: "What cleaning products do you use?",
    answer: "Our teams arrive with professional-grade, EPA-approved cleaning products. If you have sensitivities or prefer specific products, let us know and we\u2019ll accommodate.",
  },
  {
    question: "Are your cleaners background-checked?",
    answer: "Yes. Every member of our team is background-checked, insured, and receives ongoing training. We only use in-house employees\u2014never subcontractors.",
  },
  {
    question: "What areas of Seattle do you serve?",
    answer: "We serve homes across Seattle (Capitol Hill, Ballard, Fremont, Green Lake, Queen Anne, Wallingford, Beacon Hill, Columbia City) and the Eastside (Bellevue, Kirkland, Redmond).",
  },
  {
    question: "Can I reschedule or skip a cleaning?",
    answer: "Absolutely. We understand life is unpredictable. You can reschedule or skip a visit with reasonable notice\u2014just reach out by phone or email and we\u2019ll adjust your schedule.",
  },
  {
    question: "What\u2019s included in a regular cleaning?",
    answer: "A regular cleaning covers kitchen surfaces, bathroom sanitization, dusting, vacuuming and mopping all floors, bed making, and trash removal. We track custom notes per visit so the team addresses your specific priorities every time.",
  },
] as const;

export const nav = {
  primary: [
    {
      label: "Services",
      href: "/services/regular",
      children: services.map((s) => ({ label: s.name, href: s.slug })),
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Reviews",
      href: "/reviews",
    },
    { label: "Contact", href: "/contact" },
  ],
} as const;
