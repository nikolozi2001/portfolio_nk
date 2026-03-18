"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";
// siteConfig.email is not translated (stays the same in both languages)
import { useLocale } from "@/hooks/useLocale";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export default function ContactPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-5">
        {/* Contact info */}
        <AnimatedSection className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.contact.email}</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t.contact.location}</p>
                <p className="font-medium">{t.site.location}</p>
              </div>
            </div>

            <hr className="border-border" />

            <div>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                {t.contact.findMe}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                      aria-label={link.name}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact form */}
        <AnimatedSection className="lg:col-span-3" delay={0.1}>
          <ContactForm />
        </AnimatedSection>
      </div>
    </div>
  );
}
