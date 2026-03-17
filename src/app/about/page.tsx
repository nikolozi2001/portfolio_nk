import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Code, Coffee, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Nika Kachibaia — Full Stack Developer",
};

const stats = [
  { icon: Code, label: "Years of Experience", value: "5+" },
  { icon: Briefcase, label: "Projects Completed", value: "50+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
  { icon: MapPin, label: "Based in", value: "SF, CA" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title="About Me"
        subtitle="A passionate developer who loves turning ideas into reality."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-5">
        {/* Image placeholder */}
        <AnimatedSection className="lg:col-span-2">
          <div className="aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/20 to-accent-light/20">
            <div className="flex h-full items-center justify-center">
              <span className="text-8xl font-bold text-accent/30">JD</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection className="lg:col-span-3 space-y-6" delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Full Stack Developer with 5+ years of experience building
              web applications that are fast, accessible, and visually
              compelling. I specialize in React, Next.js, and TypeScript, and
              I&apos;m passionate about creating great user experiences.
            </p>
            <p>
              My journey in software development started when I built my first
              website at 16. Since then, I&apos;ve worked with startups, agencies,
              and enterprise companies to deliver products that make a real
              impact.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing what I&apos;ve
              learned through blog posts and talks.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4"
              >
                <stat.icon className="h-5 w-5 text-accent" />
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
