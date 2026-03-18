"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { socialLinks } from "@/data/site";
import { useLocale } from "@/hooks/useLocale";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-accent/10 grid-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold font-mono tracking-tight">
              <span className="gradient-text">NK</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.site.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-muted-foreground hover:text-accent hover:shadow-[0_0_8px_var(--glow)] transition-all"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex items-center justify-center gap-1 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {t.site.name}. {t.footer.builtWith}</span>
          <Heart className="h-3 w-3 fill-accent text-accent" />
          <span>{t.footer.and}</span>
        </div>
      </div>
    </footer>
  );
}
