import { NavItem, SocialLink } from "@/types";

export const siteConfig = {
  name: "Nika Kachibaia",
  title: "Full Stack Developer",
  description:
    "I build exceptional digital experiences that are fast, accessible, and visually compelling.",
  email: "hello@johndoe.dev",
  location: "San Francisco, CA",
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
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
];
