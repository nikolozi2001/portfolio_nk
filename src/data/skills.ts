import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", icon: "🌐", level: 95, category: "frontend", years: 6, detail: "Semantic HTML, accessibility, SEO" },
  { name: "CSS", icon: "🎨", level: 92, category: "frontend", years: 6, detail: "Flexbox, Grid, animations, responsive" },
  { name: "JavaScript", icon: "🟨", level: 85, category: "frontend", years: 5, detail: "ES6+, async/await, DOM manipulation" },
  { name: "TypeScript", icon: "🔷", level: 80, category: "frontend", years: 2, detail: "Strict types, generics, interfaces" },
  { name: "React", icon: "⚛️", level: 82, category: "frontend", years: 3, detail: "Hooks, Context, Next.js integration" },
  { name: "Next.js", icon: "▲", level: 78, category: "frontend", years: 2, detail: "App Router, SSR, SSG, API routes" },
  { name: "Vue.js", icon: "💚", level: 65, category: "frontend", years: 1, detail: "Composition API, Vuex" },
  { name: "React Native", icon: "📱", level: 70, category: "frontend", years: 1, detail: "Expo, cross-platform mobile apps" },
  { name: "Tailwind CSS", icon: "🎯", level: 80, category: "frontend", years: 2, detail: "Utility-first, responsive design" },
  { name: "WordPress", icon: "📝", level: 70, category: "frontend", years: 2, detail: "Theme development, plugins" },

  // Backend
  { name: "Node.js", icon: "🟢", level: 78, category: "backend", years: 3, detail: "Express, REST APIs, middleware" },
  { name: "PHP", icon: "🐘", level: 70, category: "backend", years: 3, detail: "Laravel, OOP, backend logic" },
  { name: "Python", icon: "🐍", level: 68, category: "backend", years: 2, detail: "Flask, scripting, data processing" },
  { name: "C++", icon: "⚙️", level: 65, category: "backend", years: 3, detail: "OOP, algorithms, university projects" },
  { name: "SQL", icon: "🗄️", level: 85, category: "backend", years: 4, detail: "Complex queries, optimization" },
  { name: "MS SQL Server", icon: "💾", level: 82, category: "backend", years: 3, detail: "Stored procedures, views, reports" },
  { name: "MySQL", icon: "🐬", level: 80, category: "backend", years: 3, detail: "Schema design, indexing" },
  { name: "PL/SQL", icon: "📊", level: 75, category: "backend", years: 2, detail: "Oracle procedures, triggers" },
  { name: "T-SQL", icon: "📋", level: 78, category: "backend", years: 3, detail: "SQL Server scripting, CTEs" },
  { name: "REST APIs", icon: "🔌", level: 82, category: "backend", years: 3, detail: "Design, documentation, integration" },
  { name: "Laravel", icon: "🔴", level: 60, category: "backend", years: 1, detail: "MVC, Eloquent ORM, APIs" },

  // Tools & DevOps
  { name: "Git", icon: "🔀", level: 85, category: "tools", years: 5, detail: "Branching, merging, GitHub/GitLab" },
  { name: "Linux", icon: "🐧", level: 85, category: "tools", years: 4, detail: "Server admin, bash scripting" },
  { name: "GeoServer", icon: "🗺️", level: 78, category: "tools", years: 2, detail: "WMS/WFS, spatial data serving" },
  { name: "Google Cloud", icon: "☁️", level: 65, category: "tools", years: 1, detail: "GCE, Cloud Storage, certified" },
  { name: "Vercel", icon: "▲", level: 80, category: "tools", years: 2, detail: "Deployment, serverless functions" },
  { name: "IIS", icon: "🖥️", level: 72, category: "tools", years: 2, detail: "Windows web server management" },
  { name: "VMware", icon: "💻", level: 70, category: "tools", years: 3, detail: "Virtual machines, server setup" },
  { name: "Active Directory", icon: "🔐", level: 70, category: "tools", years: 2, detail: "User management, group policies" },
  { name: "VS Code", icon: "📘", level: 90, category: "tools", years: 5, detail: "Extensions, debugging, shortcuts" },
  { name: "MS Office", icon: "📄", level: 88, category: "tools", years: 7, detail: "Excel, Word, PowerPoint, Visio" },

  // Design & Other
  { name: "Adobe Photoshop", icon: "🖼️", level: 60, category: "design", years: 2, detail: "Image editing, web graphics" },
  { name: "Adobe Illustrator", icon: "✏️", level: 58, category: "design", years: 1, detail: "Vector graphics, icons" },
  { name: "Responsive Design", icon: "📐", level: 85, category: "design", years: 5, detail: "Mobile-first, cross-device" },
  { name: "GIS / Mapping", icon: "🌍", level: 80, category: "design", years: 2, detail: "OpenLayers, Leaflet, GeoJSON" },
];
