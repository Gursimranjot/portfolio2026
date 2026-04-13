export const siteConfig = {
  name: "Gursimran Dhiman",
  title: "Designer & Developer",
  tagline: "Crafting digital\nexperiences",
  description: "UI/UX designer and front-end developer with a passion for building beautiful, functional products. Available for freelance work.",
  email: "hello@yourname.com",
  links: {
    github: "https://github.com/Gursimranjot",
    linkedin: "https://www.linkedin.com/in/gursimran2/",
    twitter: "https://x.com/Gursimran1Singh",
    dribbble: "https://dribbble.com/Gsingh",
  },
  nav: [
    { label: "Work",     href: "/work" },
    { label: "About",    href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Contact",  href: "/contact" },
  ],
  stats: [
    { number: "5+",  label: "Years experience" },
    { number: "30+", label: "Projects shipped" },
    { number: "15+", label: "Happy clients" },
    { number: "3",   label: "Disciplines" },
  ],
  skills: [
    "UI Design","UX Research","React","Next.js","Figma","Framer",
    "TypeScript","Tailwind CSS","Motion Design","Design Systems","Prototyping","GSAP",
  ],
  about: {
    intro: "I'm a designer-developer hybrid based in India, specializing in turning complex problems into elegant digital products. I believe the best work sits at the intersection of visual craft and technical depth.",
    body:  "With over 8+ years of experience across startups and agencies, I've led design and development for products used by thousands of people. My workflow bridges Figma and code — I design in high fidelity and build pixel-perfect implementations.",
    footer: "When I'm not designing or coding, I write about frontend development, design systems, and the creative process.",
  },
}

export const projects = [
  {
    id: "brand-design-system",
    title: "Brand Design System",
    description: "A comprehensive design system built for a fintech startup — tokens, components, and documentation.",
    tags: ["Design Systems","Figma","React"],
    year: "2024", client: "FinTech Co.", role: "Lead Designer",
    size: "large", color: "#1a1a2e",
  },
  {
    id: "ecommerce-redesign",
    title: "E-Commerce Redesign",
    description: "Full redesign and front-end rebuild of a fashion brand's store, boosting conversion by 34%.",
    tags: ["UX Design","Next.js","Framer"],
    year: "2024", client: "Fashion Brand", role: "Designer & Developer",
    size: "small", color: "#0d1b2a",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard",
    description: "Complex data visualization dashboard for an analytics platform used by 10k+ users.",
    tags: ["UI Design","React","D3.js"],
    year: "2023", client: "Analytics SaaS", role: "Frontend Developer",
    size: "half", color: "#12100e",
  },
  {
    id: "mobile-app",
    title: "Mobile App — Health Tracker",
    description: "iOS and Android health tracking app — designed in Figma, built with React Native.",
    tags: ["Mobile Design","React Native"],
    year: "2023", client: "Health Startup", role: "UI/UX Designer",
    size: "half", color: "#0b1320",
  },
]

export const articles = [
  {
    slug: "building-design-systems-that-scale",
    title: "Building Design Systems That Actually Scale",
    date: "2024-03-10", readTime: "8 min",
    tags: ["Design Systems","React"],
    description: "Lessons learned from building and maintaining design systems across multiple products.",
  },
  {
    slug: "figma-to-code-workflow",
    title: "My Figma-to-Code Workflow in 2024",
    date: "2024-02-18", readTime: "6 min",
    tags: ["Workflow","Figma"],
    description: "How I bridge the gap between design and development without losing fidelity.",
  },
  {
    slug: "micro-interactions-that-matter",
    title: "Micro-Interactions That Actually Matter",
    date: "2024-01-22", readTime: "5 min",
    tags: ["Motion","UX"],
    description: "Choosing which animations to add — and which ones to ruthlessly cut.",
  },
]
