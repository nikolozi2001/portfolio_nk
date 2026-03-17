"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <article className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
          {/* Image placeholder */}
          <div className="relative aspect-video overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent-light/20">
              <span className="text-4xl font-bold text-accent/30">
                {project.title.charAt(0)}
              </span>
            </div>
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            <div className="absolute top-3 right-3 rounded-full bg-card/90 p-2 opacity-0 transition-opacity group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-1 shrink-0">
                {project.githubUrl && (
                  <span className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground">
                    <Github className="h-4 w-4" />
                  </span>
                )}
                {project.liveUrl && (
                  <span className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground">
                    <ExternalLink className="h-4 w-4" />
                  </span>
                )}
              </div>
            </div>

            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
