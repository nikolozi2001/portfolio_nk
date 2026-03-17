import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    companyUrl: "https://example.com",
    location: "San Francisco, CA",
    startDate: "2024-01",
    endDate: "Present",
    description:
      "Leading frontend architecture for a SaaS platform serving 50k+ users. Driving migration from legacy codebase to Next.js with TypeScript.",
    highlights: [
      "Reduced page load time by 40% through code splitting and lazy loading",
      "Led a team of 4 developers in rebuilding the dashboard UI",
      "Implemented design system used across 3 product teams",
      "Improved test coverage from 45% to 85%",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Jest"],
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    companyUrl: "https://example.com",
    location: "Remote",
    startDate: "2022-06",
    endDate: "2023-12",
    description:
      "Built and maintained multiple web applications from concept to production. Owned the entire development lifecycle for client-facing features.",
    highlights: [
      "Built a real-time collaboration tool used by 10k+ daily active users",
      "Designed and implemented RESTful APIs serving 1M+ requests/day",
      "Reduced infrastructure costs by 30% through optimization",
      "Mentored 2 junior developers",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "3",
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    companyUrl: "https://example.com",
    location: "New York, NY",
    startDate: "2021-01",
    endDate: "2022-05",
    description:
      "Developed responsive web applications for enterprise clients. Collaborated with designers and backend teams to deliver pixel-perfect implementations.",
    highlights: [
      "Delivered 15+ client projects on time and within budget",
      "Built reusable component library reducing development time by 25%",
      "Achieved 95+ Lighthouse scores across all projects",
    ],
    technologies: [
      "React",
      "JavaScript",
      "SCSS",
      "Webpack",
      "Storybook",
    ],
  },
];
