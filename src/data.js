export const SERVICES = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications designed around your users, built to scale with your business.",
    tags: ["Web platforms", "E-commerce", "SaaS"],
    visual: "browser",
    image: "/images/web-developer.jpg"
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Purpose-built software that simplifies complex operations, connects teams, and creates a lasting competitive edge.",
    tags: ["Enterprise software", "API systems", "Automation"],
    visual: "system",
    image: "/images/software-development.jpg"
  },
  {
    number: "03",
    title: "App Development",
    description:
      "Intuitive, reliable mobile products from first prototype to production across iOS and Android.",
    tags: ["iOS", "Android", "Cross-platform"],
    visual: "mobile",
    image: "/images/app-developement.jpg"
  },
  {
    number: "04",
    title: "Digital Marketing",
    description:
      "Data-led growth strategies that connect your digital product with the audiences who need it most.",
    tags: ["Growth strategy", "SEO", "Performance"],
    visual: "growth",
    image: "/images/digital-merketeer.jpg"
  },
  {
    number: "05",
    title: "Projects",
    description:
      "Explore our portfolio of delivered work across industries and technologies.",
    tags: ["Case studies", "Portfolio", "Results"],
    visual: "growth",
    image: null
  },
];

export const PROJECTS = [
  {
    id: "fintech-core",
    title: "Apex FinTech Platform",
    category: "Web & Enterprise SaaS",
    client: "Apex Global Wealth",
    badge: "Featured Product",
    gradient: "bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-[#082f49]",
    accentColor: "#38bdf8",
    description:
      "Next-generation algorithmic wealth dashboard processing $2.4B+ in daily transactions with sub-second execution.",
    detailedDescription:
      "Apex approached Codeation to rebuild their core consumer and institutional asset terminal from the ground up. We designed an ultra-responsive web application that handles real-time WebSockets, streaming analytics, and automated regulatory reporting, all with 99.999% uptime.",
    metrics: [
      { value: "$2.4B+", label: "Daily Processing Volume" },
      { value: "42ms", label: "Average Latency" },
      { value: "+180%", label: "User Retention" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Go / Microservices",
      "TailwindCSS",
      "Redis",
      "Kafka",
    ],
    deliverables: [
      "Ultra-low latency institutional trading cockpit",
      "Real-time asset telemetry & WebSocket engine",
      "SOC2-compliant security & encrypted audit trail",
      "Native mobile companion for iOS and Android",
    ],
  },
  {
    id: "health-ai",
    title: "PulseHealth AI Diagnostic Suite",
    category: "Mobile & HealthTech",
    client: "Pulse MedTech",
    badge: "Medical AI Platform",
    gradient: "bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#172554]",
    accentColor: "#60a5fa",
    description:
      "AI-driven biometric screening application trusted by over 450+ clinic networks across Europe.",
    detailedDescription:
      "PulseHealth transforms consumer smartphones and tablet hardware into medical diagnostic portals. Powered by on-device computer vision and machine learning models, the app classifies critical health markers in seconds, connecting patients with certified specialists.",
    metrics: [
      { value: "450+", label: "Clinic Networks" },
      { value: "98.4%", label: "Diagnostic Accuracy" },
      { value: "1.2M+", label: "Active Patients" },
    ],
    tech: [
      "React Native",
      "Python / FastAPI",
      "CoreML / TensorFlow Lite",
      "AWS HIPAA Cloud",
      "PostgreSQL",
    ],
    deliverables: [
      "Edge-computing biometric recognition model",
      "Cross-platform clinician & patient portals",
      "HIPAA and GDPR medical data compliance vault",
      "Instant video telehealth consultation pipeline",
    ],
  },
  {
    id: "omnichannel-commerce",
    title: "Veloce Luxury eCommerce",
    category: "Digital Experience & Headless",
    client: "Veloce Atelier",
    badge: "Global E-Commerce",
    gradient: "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0284c7]",
    accentColor: "#93c5fd",
    description:
      "Global headless commerce flagship serving 80+ countries with localized 3D product customization.",
    detailedDescription:
      "A complete digital transformation for an iconic luxury goods manufacturer. We engineered a headless Shopify Plus architecture with custom WebGL 3D model configurators, localized currency engines, and instant page transitions that quadrupled international sales.",
    metrics: [
      { value: "+320%", label: "Mobile Conversion Rate" },
      { value: "80+", label: "Countries Supported" },
      { value: "0.8s", label: "LCP Page Load Speed" },
    ],
    tech: [
      "Shopify Plus",
      "React / Vite",
      "Three.js / WebGL",
      "GraphQL",
      "Cloudflare Workers",
    ],
    deliverables: [
      "3D Interactive product customizer in browser",
      "Multi-currency dynamic checkout & tax calculation",
      "Sub-second headless storefront with edge caching",
      "Omnichannel inventory synchronization",
    ],
  },
  {
    id: "repondex-commerce",
    title: "Veloce Luxury eCommerce",
    category: "Digital Experience & Headless",
    client: "Veloce Atelier",
    badge: "Global E-Commerce",
    gradient: "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0284c7]",
    accentColor: "#93c5fd",
    description:
      "Global headless commerce flagship serving 80+ countries with localized 3D product customization.",
    detailedDescription:
      "A complete digital transformation for an iconic luxury goods manufacturer. We engineered a headless Shopify Plus architecture with custom WebGL 3D model configurators, localized currency engines, and instant page transitions that quadrupled international sales.",
    metrics: [
      { value: "+320%", label: "Mobile Conversion Rate" },
      { value: "80+", label: "Countries Supported" },
      { value: "0.8s", label: "LCP Page Load Speed" },
    ],
    tech: [
      "Shopify Plus",
      "React / Vite",
      "Three.js / WebGL",
      "GraphQL",
      "Cloudflare Workers",
    ],
    deliverables: [
      "3D Interactive product customizer in browser",
      "Multi-currency dynamic checkout & tax calculation",
      "Sub-second headless storefront with edge caching",
      "Omnichannel inventory synchronization",
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Rishabh Jain",
    role: "Founder, CEO",
    bio: "Former CEO & Founder @ Jnex Soft Solutions. Leading Codeation's vision and strategic direction.",
    image: "/images/avatar2.jpg",
  },
  {
    name: "Anoop Poonia",
    role: "Frontend Engineer",
    bio: "Gamer, Developer, and Designer. Crafts pixel-perfect interfaces with clean code.",
    image: "/images/avatar1.jpg",
  },
  {
    name: "Ritika Bhardwaj",
    role: "Lead Data Scientist",
    bio: "Research Paper Writer, lover of technology. Turns complex data into actionable insights.",
    image: "/images/avatar3.jpg",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We connected with Codeation after a long time of searching for a company that can help us with a customized dashboard solution. They work very professionally and within deadlines.",
    name: "Sujit Thakur",
    role: "CEO, Deuglo",
  },
  {
    quote:
      "We decided to work with Codeation after having a detailed brainstorming session with the Codeation team. They were very detailed and provided us with various insightful feedback for our project and we are more than happy to choose them. Their hands-on work experience and ability to tailor our dashboard according to our specific needs have been exemplary.",
    name: "Meng",
    role: "Product Lead",
  },
  {
    quote:
      "Codeation has been spectacular in every way possible. We hired this agency for multiple projects and they have been able to justify themselves at every point. There were no delays in communication and they had these complete processes for every project that made it very easy to coordinate.",
    name: "Uday Jain",
    role: "Co-Founder, Adi Shree Udyog",
  },
  {
    quote:
      "The web team's efforts to use AWS to design our app and launch it has been amazing. They were able to understand what we needed and wanted to communicate as a brand. The passion and dedication they work with are truly appreciable.",
    name: "Kritika Dua",
    role: "Senior Project Manager, Ex-PayU",
  },
];
