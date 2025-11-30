import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

export const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux"]
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Restfull api"]
    },
    {
        category: "Tools & DevOps",
        icon: Terminal,
        items: ["Git/github", "Postman"]
    },
    {
        category: "Mobile & Others",
        icon: Smartphone,
        items: ["Firebase", "Respnsive design"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Weather Application",
        description: "A responsive weather website with real-time weather data, forecasts, and location-based search functionality using weather APIs.",
        tags: ["React", "CSS", "API Integration", "Responsive Design"],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
        demoUrl: "https://weather-liart-theta.vercel.app/",
        repoUrl: "https://github.com/Varun07P/Weather"
    },
    {
        id: 2,
        title: "Recipe Ideas",
        description: "A recipe discovery platform with advanced search, filtering, and meal planning features. Browse thousands of recipes with detailed instructions and nutritional information.",
        tags: ["React", "Tailwind CSS", "API Integration", "LocalStorage"],
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
        demoUrl: "https://recipe-ideas-amber.vercel.app/",
        repoUrl: "https://github.com/Varun07P/Recipe-Ideas"
    },
    {
        id: 3,
        title: "Tinylink",
        description: "A URL shortening Service Where We an Make a Short Link and We can make custom url",
        tags: ["React", "Node.js", "postgresssql", "Express", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        demoUrl: "https://tiny-link-flame-iota.vercel.app/",
        repoUrl: "https://github.com/Varun07P/TinyLink"
    },
    {
        id: 4,
        title: "E-Commerce with Admin Dashboard",
        description: "A comprehensive e-commerce platform featuring product management, shopping cart, admin dashboard for inventory control, order management, and sales analytics.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Admin Panel", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        demoUrl: "#",
        repoUrl: "https://github.com/Pandeycoder/E-Commerce"
    }
];
