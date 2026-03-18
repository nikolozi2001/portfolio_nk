"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { projects } from "@/data/projects";
import { formatDate } from "@/lib/utils";
import { useLocale } from "@/hooks/useLocale";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  const { t } = useLocale();

  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.projects.backToProjects}
      </Link>

      <AnimatedSection className="mt-8">
        {/* Project hero thumbnail */}
        <div className="aspect-video overflow-hidden rounded-2xl glow-border">
          <ProjectThumbnail
            title={project.title}
            slug={project.slug}
            tags={project.tags}
            className="w-full h-full"
          />
        </div>

        {/* Header */}
        <div className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {formatDate(project.date)} · {project.category}
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <Github className="h-4 w-4" />
                  {t.projects.code}
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t.projects.liveDemo}
                </a>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.longDescription}
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
