import { Hero } from "@/components/sections/Hero";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work that I'm most proud of."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>

      {/* Skills Preview */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />
        <div className="mt-12">
          <SkillsGrid skills={skills.slice(0, 12)} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
          >
            View All Skills
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/10 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent-light/10 blur-[80px]" />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-dark hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
