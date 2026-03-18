import { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Nika Kachibaia",
  title: "Full Stack Developer",
  description:
    "I build web applications, GIS systems, and data-driven platforms — with a focus on performance, scalability, and clean code.",
  email: "mr.qachibaia44@gmail.com",
  location: "Tbilisi, Georgia",
  resumeUrl: "/resume.pdf",
  ogImage: "/og.jpg",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/nikolozi2001", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nika-kachibaia-7b7634198/", icon: "linkedin" },
  { name: "Twitter", url: "https://x.com/NikaKachibaia1", icon: "twitter" },
];
