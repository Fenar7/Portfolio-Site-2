// index.js
export const servicesData = [{
        title: "FullStack Development",
        description: "I build modern websites and web apps end-to-end — from UI/UX to backend and database. The focus is simple: clean architecture, fast performance, and a product that feels premium on every screen. Whether it’s a marketing site, dashboard, booking flow, or a custom web app, you get a build that’s reliable today and easy to evolve tomorrow.",
        items: [{
                title: "Backend Development",
                description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
            },
            {
                title: "Frontend Excellence",
                description: "(React, Vue, TypeScript, Interactive UI/UX)",
            },
            {
                title: "Database Design",
                description: "(SQL/NoSQL Optimization, Scalable Structures)",
            },
        ],
    },
    {
        title: "UI/UX Design",
        description: "UI that looks premium and feels effortless. I design clear user flows, sharp layouts, and reusable component systems so your product stays consistent as you scale.",
        items: [{
                title: "User Flows & Wireframes",
                description: "(GitHub Actions, Docker, Kubernetes)",
            },
            {
                title: "High-Fidelity UI (Figma) ",
                description: "(Linux, Nginx, Load Balancing)",
            },
            {
                title: "Design Systems",
                description: "(Caching, Compression, Lighthouse 90+ Scores)",
            },
        ],
    },
    {
        title: "Platform Builds (WordPress / Framer / Wix)",
        description: "Need something fast, clean, and easy to manage? I build and customize WordPress, Framer, and Wix websites with the same attention to design and detail — so it doesn’t look platform made",
        items: [{
                title: "Website Setup & Customization",
                description: "(Refactoring, Tech Debt Cleanup)",
            },
            {
                title: "CMS Structure & Content Layout",
                description: "(Vulnerability Assessments)",
            },
            {
                title: "Launch, Fixes & Ongoing Updates",
                description: "(SSR, Metadata, Structured Data)",
            },
        ],
    },
    {
        title: "Visual / Graphic Design",
        description: "Design support for brands that need strong visuals across web and social. Clean, consistent assets that match your style — not random templates.",
        items: [{
                title: "Brand Visual Direction",
                description: "(Single codebase for iOS/Android/Web)",
            },
            {
                title: "Social Creatives & Ad Designs",
                description: "(Offline mode, Push Notifications)",
            },
            {
                title: "Web Graphics & Assets",
                description: "(Checkout flows, Payment Gateways, Inventory APIs)",
            },
        ],
    },
];
export const projects = [{
        id: 1,
        name: "Hubode Living",
        description: "Hubode Living is a brand-first website for a modern co-living concept built for “in-between” lives — interns, creators, coders, and young professionals. The site communicates Hubode’s mission and values with a calm, premium feel, while keeping the experience fast, responsive, and mobile-friendly.",
        href: "https://hubode-marketing-web.vercel.app/",
        image: "/assets/projects/hubode-living.png",
        bgImage: "/assets/backgrounds/blanket.jpg",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Next.js" },
            { id: 3, name: "Node.js" },
            { id: 3, name: "Docker" },
            { id: 3, name: "Sanity" },
            { id: 4, name: "MongoDB" },
            { id: 5, name: "Tailwind CSS" },
        ],
    },
    {
        id: 2,
        name: "PropertySeller UAE",
        description: "Designed the full UI/UX for PropertySeller UAE from scratch — a real-estate platform built to remove the usual chaos: duplicate listings, biased agents, and confusing steps. I worked closely with the team to shape the product flow, information architecture, and high-fidelity Figma prototype focused on clarity, trust, and an easy buying journey.",
        href: "https://www.propertyseller.com/",
        image: "/assets/projects/proeprty-seller.png",
        bgImage: "/assets/backgrounds/curtains.jpg",
        frameworks: [
            { id: 1, name: "UI/UX" },
            { id: 2, name: "Product Design" },
            { id: 2, name: "Figma" },
            { id: 2, name: "User Flows" },
            { id: 2, name: "Design System" },
        ],
    },
    {
        id: 3,
        name: "Combat Fitness Cult Wix",
        description: "Built the Combat Fitness Cult website on Wix with a custom UI/UX layer to match the brand’s high-intensity identity. Implemented Trials, Bookings, Memberships, and payment integration, plus structured pages for coaches, media, transformations, and online programs — designed to drive sign-ups and make the joining flow frictionless.",
        href: "https://www.cfcfit.com/",
        image: "/assets/projects/combat-fitness-cult.png",
        bgImage: "/assets/backgrounds/map.jpg",
        frameworks: [
            { id: 1, name: "Wix" },
            { id: 2, name: "Bookings" },
            { id: 3, name: "Memberships" },
            { id: 4, name: "Payment Gateway" },
            {
                id: 5,
                name: "Custom UI UX"
            },
        ],
    },
    {
        id: 4,
        name: "https://www.cfcfit.com/",
        description: "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
        href: "",
        image: "/assets/projects/electronics-store.jpg",
        bgImage: "/assets/backgrounds/poster.jpg",
        frameworks: [
            { id: 1, name: "Vue.js" },
            { id: 2, name: "Laravel" },
            { id: 3, name: "MySQL" },
            { id: 4, name: "SCSS" },
        ],
    },
    {
        id: 5,
        name: "Home Decor Marketplace",
        description: "A curated collection of designer home decor items, including furniture and artisan vases.",
        href: "",
        image: "/assets/projects/home-decor-store.jpg",
        bgImage: "/assets/backgrounds/table.jpg",
        frameworks: [
            { id: 1, name: "Angular" },
            { id: 2, name: "Firebase" },
            { id: 3, name: "GraphQL" },
            { id: 4, name: "Material UI" },
        ],
    },
    {
        id: 6,
        name: "Digital Game Store",
        description: "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
        href: "",
        image: "/assets/projects/game-store.jpg",
        bgImage: "/assets/backgrounds/curtains.jpg",
        frameworks: [
            { id: 1, name: "Svelte" },
            { id: 2, name: "Node.js" },
            { id: 3, name: "MongoDB" },
            { id: 4, name: "Chakra UI" },
        ],
    },
];
export const socials = [
    { name: "Instagram", href: "https://www.instagram.com/ali.sanatidev/reels/" },
    {
        name: "Youtube",
        href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
    },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ali-sanati/" },
    { name: "GitHub", href: "https://github.com/Ali-Sanati" },
];