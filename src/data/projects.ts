import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard.",
    longDescription:
      "Built a scalable e-commerce solution handling 10k+ products with real-time inventory tracking, Stripe payment integration, and a comprehensive admin dashboard for order management. Features include advanced search with filters, wishlist functionality, and automated email notifications.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    date: "2025-12",
  },
  {
    slug: "ai-chat-app",
    title: "AI Chat Application",
    description:
      "Real-time chat app powered by AI with streaming responses, conversation history, and multi-model support.",
    longDescription:
      "Developed an AI-powered chat application featuring streaming responses, persistent conversation history, and support for multiple AI models. Implemented WebSocket connections for real-time communication and a clean, responsive UI with markdown rendering.",
    image: "/projects/ai-chat.jpg",
    tags: ["React", "Node.js", "WebSocket", "OpenAI API", "MongoDB"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    date: "2025-10",
  },
  {
    slug: "task-management-dashboard",
    title: "Task Management Dashboard",
    description:
      "A Kanban-style project management tool with drag-and-drop, team collaboration, and analytics.",
    longDescription:
      "Created a comprehensive project management dashboard featuring Kanban boards with drag-and-drop functionality, real-time team collaboration, sprint planning, and detailed analytics. Includes role-based access control and integration with GitHub and Slack.",
    image: "/projects/task-mgmt.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "DnD Kit"],
    category: "frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    date: "2025-08",
  },
  {
    slug: "fitness-tracker-mobile",
    title: "Fitness Tracker App",
    description:
      "Cross-platform mobile app for workout tracking with progress charts and social features.",
    longDescription:
      "Built a cross-platform fitness tracking application with workout logging, progress visualization through interactive charts, social features for sharing achievements, and personalized workout recommendations based on user goals and history.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "Chart.js"],
    category: "mobile",
    githubUrl: "https://github.com",
    featured: false,
    date: "2025-06",
  },
  {
    slug: "portfolio-website",
    title: "Developer Portfolio",
    description:
      "Modern developer portfolio with dark mode, animations, and dynamic project showcase.",
    longDescription:
      "Designed and built a modern developer portfolio featuring smooth animations with Framer Motion, dark/light theme toggle, dynamic project filtering, and optimized performance with perfect Lighthouse scores.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "frontend",
    githubUrl: "https://github.com",
    featured: false,
    date: "2025-04",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with 7-day forecasts, interactive maps, and location search.",
    longDescription:
      "Developed a weather dashboard application that displays current conditions, 7-day forecasts, and interactive weather maps. Features include location-based weather detection, city search, severe weather alerts, and hourly breakdown with beautiful data visualizations.",
    image: "/projects/weather.jpg",
    tags: ["React", "TypeScript", "OpenWeather API", "Mapbox", "Chart.js"],
    category: "frontend",
    githubUrl: "https://github.com",
    featured: false,
    date: "2025-02",
  },
];
