import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "fuel-app",
    title: "FuelAPP",
    description:
      "Fuel station finder and loyalty app with mobile, admin panel, and backend API.",
    longDescription:
      "A comprehensive fuel station management platform featuring a mobile app for users to find nearby stations and earn loyalty points, an admin dashboard for station management, and a robust Node.js backend API. Built with TypeScript and React Native (Expo) for cross-platform mobile support.",
    image: "/projects/fuelapp.jpg",
    tags: ["TypeScript", "React Native", "Expo", "Node.js"],
    category: "fullstack",
    githubUrl: "https://github.com/nikolozi2001/FuelAPP",
    featured: true,
    date: "2026-03",
  },
  {
    slug: "regional-statistics",
    title: "Regional Statistics Portal",
    description:
      "Georgian Regional Statistics Portal with multilingual support and interactive data visualization.",
    longDescription:
      "A full-stack data visualization platform for Georgian regional statistics, featuring interactive charts, multilingual support (Georgian/English), dynamic filtering, and a Node.js backend serving statistical data via REST APIs. Built for the National Statistics Office of Georgia (GeoStat).",
    image: "/projects/regional-stats.jpg",
    tags: ["React", "Node.js", "JavaScript", "Data Visualization"],
    category: "fullstack",
    githubUrl: "https://github.com/nikolozi2001/regional-statistics-react",
    featured: true,
    date: "2025-10",
  },
  {
    slug: "medical-chatbot",
    title: "Medical Chatbot",
    description:
      "AI-powered medical chatbot with React frontend and Node.js backend, deployed on Vercel.",
    longDescription:
      "A full-stack medical chatbot application with a clean React frontend and a Node.js/Express backend. Features AI-powered responses for medical inquiries, conversation history, and a responsive UI. Both frontend and backend are deployed on Vercel for seamless performance.",
    image: "/projects/medical-chatbot.jpg",
    tags: ["React", "Node.js", "AI", "Vercel"],
    category: "fullstack",
    liveUrl: "https://medical-chatbot-frontend.vercel.app",
    githubUrl: "https://github.com/nikolozi2001/medical-chatbot-frontend",
    featured: true,
    date: "2025-03",
  },
  {
    slug: "e-commerce",
    title: "E-Commerce Platform",
    description:
      "A React-based e-commerce shopping platform with product catalog, cart, and checkout.",
    longDescription:
      "Built a full-featured e-commerce platform using React with product browsing, shopping cart functionality, user authentication, and a streamlined checkout flow. Features responsive design and modern UI components.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "JavaScript", "E-Commerce"],
    category: "frontend",
    githubUrl: "https://github.com/nikolozi2001/E-Commerce",
    featured: false,
    date: "2025-09",
  },
  {
    slug: "environmental-statistics-portal",
    title: "Environmental Statistics Portal",
    description:
      "Data portal for environmental statistics with interactive visualizations and filtering.",
    longDescription:
      "A specialized web portal for browsing and visualizing environmental statistics data. Built with JavaScript, featuring interactive charts, data filtering by region and time period, and export capabilities. Developed as part of the GeoStat digital transformation initiative.",
    image: "/projects/env-stats.jpg",
    tags: ["JavaScript", "Data Visualization", "GeoStat"],
    category: "frontend",
    githubUrl: "https://github.com/nikolozi2001/environmental-statistics-portal",
    featured: false,
    date: "2025-09",
  },
  {
    slug: "data-collection-form",
    title: "Data Collection Form",
    description:
      "TypeScript-based dynamic data collection form with validation, deployed on Vercel.",
    longDescription:
      "A modern data collection form application built with TypeScript and Next.js, featuring dynamic field generation, real-time validation, and a clean UI. Deployed on Vercel with automatic builds. Designed for efficient survey and data gathering workflows.",
    image: "/projects/data-form.jpg",
    tags: ["TypeScript", "Next.js", "Vercel"],
    category: "frontend",
    liveUrl: "https://data-collection-form-nine.vercel.app/",
    githubUrl: "https://github.com/nikolozi2001/data-collection-form-main",
    featured: false,
    date: "2025-02",
  },
  {
    slug: "movie-app",
    title: "Movie App",
    description:
      "Cross-platform mobile app for browsing movies, built with React Native and Expo.",
    longDescription:
      "A React Native mobile application built with Expo and TypeScript for browsing movies. Features include movie search, detailed movie pages, ratings display, and a clean mobile-first UI. Built as a cross-platform solution for both iOS and Android.",
    image: "/projects/movie-app.jpg",
    tags: ["React Native", "Expo", "TypeScript", "Mobile"],
    category: "mobile",
    githubUrl: "https://github.com/nikolozi2001/movie_app",
    featured: false,
    date: "2025-09",
  },
  {
    slug: "geoserver-map",
    title: "GeoServer Map",
    description:
      "Interactive GIS mapping application using GeoServer for spatial data visualization.",
    longDescription:
      "An interactive mapping application leveraging GeoServer for serving and visualizing geospatial data. Features include layer switching, spatial queries, and municipality-level data visualization. Built for the National Statistics Office of Georgia to display regional geographic data.",
    image: "/projects/geoserver.jpg",
    tags: ["JavaScript", "GeoServer", "GIS", "OpenLayers"],
    category: "fullstack",
    githubUrl: "https://github.com/nikolozi2001/GeoserverMap",
    featured: false,
    date: "2024-11",
  },
  {
    slug: "invoice-app",
    title: "Invoice App",
    description:
      "Invoice management application built with TypeScript for creating and tracking invoices.",
    longDescription:
      "A TypeScript-based invoice management application for creating, editing, and tracking invoices. Features include PDF generation, status tracking, client management, and a clean dashboard for overview. Built with modern web technologies.",
    image: "/projects/invoice.jpg",
    tags: ["TypeScript", "React", "Full Stack"],
    category: "fullstack",
    githubUrl: "https://github.com/nikolozi2001/invoice",
    featured: false,
    date: "2026-01",
  },
  {
    slug: "personal-inflation",
    title: "Personal Inflation Calculator",
    description:
      "Interactive tool for calculating personal inflation rates based on spending patterns.",
    longDescription:
      "A web application that calculates personalized inflation rates based on individual spending patterns. Users can input their monthly expenses across different categories to see how inflation affects them personally, compared to national averages. Built for GeoStat.",
    image: "/projects/inflation.jpg",
    tags: ["JavaScript", "Data", "Statistics", "GeoStat"],
    category: "frontend",
    githubUrl: "https://github.com/nikolozi2001/personalinflation",
    featured: false,
    date: "2026-02",
  },
  {
    slug: "geostat-ai",
    title: "GeoStat AI",
    description:
      "AI-powered assistant for querying and understanding Georgian statistical data.",
    longDescription:
      "An AI-powered application designed to help users query and understand Georgian statistical data through natural language. Features intelligent data retrieval, natural language processing for statistical queries, and visualization of results.",
    image: "/projects/geostat-ai.jpg",
    tags: ["JavaScript", "AI", "Statistics", "GeoStat"],
    category: "fullstack",
    githubUrl: "https://github.com/nikolozi2001/Geostat_AI",
    featured: false,
    date: "2025-06",
  },
  {
    slug: "perfume-shopping-website",
    title: "Perfume Shopping Website",
    description:
      "React-based shopping website for perfumes with Tailwind CSS styling.",
    longDescription:
      "A modern e-commerce website for browsing and purchasing perfumes, built with React and styled with Tailwind CSS. Features product catalog, search and filtering, product detail pages, and a responsive mobile-first design.",
    image: "/projects/perfume.jpg",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    category: "frontend",
    githubUrl: "https://github.com/nikolozi2001/perfume-shopping-website",
    featured: false,
    date: "2025-09",
  },
];
