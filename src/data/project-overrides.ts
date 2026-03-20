import { Project } from "@/types";

/**
 * Manual overrides for GitHub repos.
 * Key = GitHub repo name (exactly as it appears on GitHub).
 * Any field you set here overrides the auto-generated value.
 * Repos NOT listed here still appear automatically from GitHub.
 *
 * Set `hidden: true` to exclude a repo from the portfolio.
 */

type ProjectOverride = Partial<Omit<Project, "slug" | "githubUrl">> & {
  hidden?: boolean;
};

export const projectOverrides: Record<string, ProjectOverride> = {
  // ═══════ Featured Projects ═══════
  FuelAPP: {
    title: "FuelAPP",
    description:
      "Fuel station finder and loyalty app with mobile, admin panel, and backend API.",
    longDescription:
      "A comprehensive fuel station management platform featuring a mobile app for users to find nearby stations and earn loyalty points, an admin dashboard for station management, and a robust Node.js backend API. Built with TypeScript and React Native (Expo) for cross-platform mobile support.",
    tags: ["TypeScript", "React Native", "Expo", "Node.js"],
    category: "fullstack",
    featured: false,
  },
  "demograpy-api": {
    title: "Demography API",
    description:
      "Backend API for demographic data, serving population statistics and census data.",
    longDescription:
      "A Node.js REST API serving demographic and population statistics data. Provides endpoints for querying census data, population breakdowns by region, age groups, and other demographic indicators. Built for GeoStat's demographic data services.",
    tags: ["JavaScript", "Node.js", "REST API", "GeoStat"],
    category: "fullstack",
    featured: true,
  },
  br: {
    title: "Business Register",
    description:
      "Business registration and enterprise data management system.",
    longDescription:
      "A web application for managing business registration data and enterprise statistics. Features search, filtering, and data display of registered businesses. Built with JavaScript for GeoStat's business statistics division.",
    tags: ["JavaScript", "Node.js", "GeoStat"],
    category: "fullstack",
    featured: true,
  },
  "pcaxis-server": {
    title: "PC-Axis Server",
    description:
      "Server for parsing and serving PC-Axis statistical data format used by statistics offices.",
    longDescription:
      "A Node.js server for reading, parsing, and serving data in the PC-Axis (.px) format — a standard used by national statistics offices worldwide. Converts PX files into JSON APIs for web consumption. Built for GeoStat's data dissemination pipeline.",
    tags: ["JavaScript", "Node.js", "PC-Axis", "Statistics"],
    category: "fullstack",
    featured: true,
  },

  // ═══════ Regular Projects ═══════
  "regional-statistics-react": {
    title: "Regional Statistics Portal",
    description:
      "Georgian Regional Statistics Portal with multilingual support and interactive data visualization.",
    longDescription:
      "A full-stack data visualization platform for Georgian regional statistics, featuring interactive charts, multilingual support (Georgian/English), dynamic filtering, and a Node.js backend serving statistical data via REST APIs. Built for the National Statistics Office of Georgia (GeoStat).",
    tags: ["React", "Node.js", "JavaScript", "Data Visualization"],
    category: "fullstack",
  },
  "medical-chatbot-frontend": {
    title: "Medical Chatbot",
    description:
      "AI-powered medical chatbot with React frontend and Node.js backend, deployed on Vercel.",
    longDescription:
      "A full-stack medical chatbot application with a clean React frontend and a Node.js/Express backend. Features AI-powered responses for medical inquiries, conversation history, and a responsive UI. Both frontend and backend are deployed on Vercel for seamless performance.",
    tags: ["React", "Node.js", "AI", "Vercel"],
    category: "fullstack",
    liveUrl: "https://medical-chatbot-frontend.vercel.app",
  },
  "E-Commerce": {
    title: "E-Commerce Platform",
    description:
      "A React-based e-commerce shopping platform with product catalog, cart, and checkout.",
    longDescription:
      "Built a full-featured e-commerce platform using React with product browsing, shopping cart functionality, user authentication, and a streamlined checkout flow. Features responsive design and modern UI components.",
    tags: ["React", "JavaScript", "E-Commerce"],
    category: "frontend",
  },
  "environmental-statistics-portal": {
    title: "Environmental Statistics Portal",
    description:
      "Data portal for environmental statistics with interactive visualizations and filtering.",
    longDescription:
      "A specialized web portal for browsing and visualizing environmental statistics data. Built with JavaScript, featuring interactive charts, data filtering by region and time period, and export capabilities. Developed as part of the GeoStat digital transformation initiative.",
    tags: ["JavaScript", "Data Visualization", "GeoStat"],
    category: "frontend",
  },
  "data-collection-form-main": {
    title: "Data Collection Form",
    description:
      "TypeScript-based dynamic data collection form with validation, deployed on Vercel.",
    longDescription:
      "A modern data collection form application built with TypeScript and Next.js, featuring dynamic field generation, real-time validation, and a clean UI. Deployed on Vercel with automatic builds.",
    tags: ["TypeScript", "Next.js", "Vercel"],
    category: "frontend",
    liveUrl: "https://data-collection-form-nine.vercel.app/",
  },
  movie_app: {
    title: "Movie App",
    description:
      "Cross-platform mobile app for browsing movies, built with React Native and Expo.",
    longDescription:
      "A React Native mobile application built with Expo and TypeScript for browsing movies. Features include movie search, detailed movie pages, ratings display, and a clean mobile-first UI.",
    tags: ["React Native", "Expo", "TypeScript", "Mobile"],
    category: "mobile",
  },
  GeoserverMap: {
    title: "GeoServer Map",
    description:
      "Interactive GIS mapping application using GeoServer for spatial data visualization.",
    longDescription:
      "An interactive mapping application leveraging GeoServer for serving and visualizing geospatial data. Features include layer switching, spatial queries, and municipality-level data visualization. Built for the National Statistics Office of Georgia.",
    tags: ["JavaScript", "GeoServer", "GIS", "OpenLayers"],
    category: "fullstack",
  },
  invoice: {
    title: "Invoice App",
    description:
      "Invoice management application built with TypeScript for creating and tracking invoices.",
    longDescription:
      "A TypeScript-based invoice management application for creating, editing, and tracking invoices. Features include PDF generation, status tracking, client management, and a clean dashboard.",
    tags: ["TypeScript", "React", "Full Stack"],
    category: "fullstack",
  },
  personalinflation: {
    title: "Personal Inflation Calculator",
    description:
      "Interactive tool for calculating personal inflation rates based on spending patterns.",
    longDescription:
      "A web application that calculates personalized inflation rates based on individual spending patterns. Users can input their monthly expenses across different categories to see how inflation affects them personally. Built for GeoStat.",
    tags: ["JavaScript", "Data", "Statistics", "GeoStat"],
    category: "frontend",
  },
  Geostat_AI: {
    title: "GeoStat AI",
    description:
      "AI-powered assistant for querying and understanding Georgian statistical data.",
    longDescription:
      "An AI-powered application designed to help users query and understand Georgian statistical data through natural language. Features intelligent data retrieval and visualization of results.",
    tags: ["JavaScript", "AI", "Statistics", "GeoStat"],
    category: "fullstack",
  },
  "perfume-shopping-website": {
    title: "Perfume Shopping Website",
    description:
      "React-based shopping website for perfumes with Tailwind CSS styling.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    category: "frontend",
  },
  "geomap-api": {
    title: "GeoMap API",
    description:
      "Geospatial mapping API for serving geographic and statistical data on interactive maps.",
    longDescription:
      "A backend API service for geospatial data, providing map layers, geographic boundaries, and statistical overlays. Powers interactive mapping applications with region-based data queries and GeoJSON responses. Built for GeoStat's GIS infrastructure.",
    tags: ["JavaScript", "Node.js", "GIS", "REST API"],
    category: "fullstack",
  },
  "nrg-api": {
    title: "Energy Statistics API",
    description:
      "API for energy sector statistics — production, consumption, and distribution data.",
    tags: ["JavaScript", "Node.js", "REST API", "Vercel"],
    category: "fullstack",
    liveUrl: "https://nrg-api.vercel.app",
  },
  receipts: {
    title: "Receipts App",
    description:
      "Full-stack receipt management app with TypeScript frontend and Node.js backend.",
    tags: ["TypeScript", "React", "Node.js", "Full Stack"],
    category: "fullstack",
  },
  formio: {
    title: "Form.io Platform",
    description:
      "Form and data management platform for Progressive Web Applications.",
    tags: ["HTML", "JavaScript", "PWA", "Forms"],
    category: "frontend",
    liveUrl: "https://form.io",
  },
  salary_calculator: {
    title: "Salary Calculator",
    description:
      "Interactive salary calculation tool with tax breakdowns and net income computation.",
    tags: ["JavaScript", "Calculator", "Finance"],
    category: "frontend",
  },
  kaleidoscope: {
    title: "Kaleidoscope",
    description:
      "Interactive visual kaleidoscope effect generator built with JavaScript.",
    tags: ["JavaScript", "Canvas API", "Creative"],
    category: "frontend",
  },
  "login-page": {
    title: "Futuristic Login Page",
    description:
      "A visually striking futuristic login page with modern UI effects and animations.",
    tags: ["JavaScript", "CSS", "UI Design", "Vercel"],
    category: "frontend",
    liveUrl: "https://login-page-rose-alpha.vercel.app/",
  },

  // ═══════ Hidden repos (not portfolio-worthy) ═══════
  Nikolozi2001: { hidden: true }, // GitHub profile readme
  ddostor: { hidden: true },
  "Storm-Breaker": { hidden: true },
  twint: { hidden: true },
  "WiFi-DoS": { hidden: true },
  Hackthebox: { hidden: true },
  ROUGH: { hidden: true },
  "negar-s-projects": { hidden: true },
  "OOP-Cpp": { hidden: true },
  "C-programming": { hidden: true },
  "cesar-cipher": { hidden: true },
  municipalitetebi: { hidden: true },
  helpers: { hidden: true },
  kitxvari: { hidden: true },
  "PHP-UniLab": { hidden: true },
  "node-course": { hidden: true },
  "vue-composition-api": { hidden: true },
  "tags-input": { hidden: true },
  portfolio: { hidden: true },
  portfolio_nk: { hidden: true },
  "react-blog": { hidden: true },
  uss2023: { hidden: true },
  "UniLab-Python": { hidden: true },
  "unilab-stajireba": { hidden: true },
  // UniLab lessons
  "unilab-finalProject": { hidden: true },
  "UniLab-NK-Lesson10": { hidden: true },
  "UniLab-NK-Lesson4": { hidden: true },
  "UniLab-NK-lesson5": { hidden: true },
  "UniLab-NK-Lesson6": { hidden: true },
  "UniLab-NK-Lesson7": { hidden: true },
  "UniLab-NK-Lesson8": { hidden: true },
  "UniLab-NK-Lesson9": { hidden: true },
  "UniLab-NokaKipiani-E-Task": { hidden: true },
  "unilab-NokaKipiani-lesson1": { hidden: true },
  "UniLab-NokaKipiani-lesson2": { hidden: true },
  "Laptop-MacBook-with-film": { hidden: true },
  SmartTV: { hidden: true },
  "UIE-beta": { hidden: true },
  housing: { hidden: true },
  CodeHS: { hidden: true },
  ChatBot: { hidden: true },
  blackList: { hidden: true },
  counter: { hidden: true },
  FlaskApp: { hidden: true },
  cyb3rt0wn: { hidden: true },
  Scandiweb: { hidden: true },
  mytaxes: { hidden: true },
  survey: { hidden: true },
  "contact-form": { hidden: true },
  "CF-Site": { hidden: true },
  // Duplicate/related repos
  "medical-chatbot-back": { hidden: true },
  "medical-chatbot-backend": { hidden: true },
  "medical-chatbot-front": { hidden: true },
  "receipts-backend": { hidden: true },
  "regional-statistics": { hidden: true },
  "regional-statistics-api": { hidden: true },
  "data-collection-form": { hidden: true },
  "toedoe-app": { hidden: true },
  laravel_api: { hidden: true },
  "Testing-Project": { hidden: true },
  TimeCapsule: { hidden: true },
  susi: { hidden: true },
  ipkure: { hidden: true },
  sales: { hidden: true },
  "tbilisi-urban-assemblage": { hidden: true },
  claimguardmocdata: { hidden: true },
};
