"use client";

import { Hero } from "@/components/sections/Hero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { useLocale } from "@/hooks/useLocale";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const { t } = useLocale();

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          title={t.home.featuredTitle}
          subtitle={t.home.featuredSubtitle}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-mono font-medium text-accent hover:underline"
          >
            {t.home.viewAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>

      {/* Skills Preview */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          title={t.home.skillsTitle}
          subtitle={t.home.skillsSubtitle}
        />
        <div className="mt-12">
          <SkillsGrid skills={skills.slice(0, 12)} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm font-mono font-medium text-accent hover:underline"
          >
            {t.home.viewAllSkills}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl glow-border bg-card/80 backdrop-blur-sm p-12 text-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent-secondary/10 blur-[80px]" />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.home.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              {t.home.ctaText}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_-5px_var(--glow)] transition-all hover:bg-accent-dark hover:shadow-[0_0_30px_-5px_var(--glow)] hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
