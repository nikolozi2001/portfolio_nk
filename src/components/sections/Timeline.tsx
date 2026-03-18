"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { Experience } from "@/types";
import { formatDate } from "@/lib/utils";
import { useLocale } from "@/hooks/useLocale";

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  const { locale } = useLocale();
  const isKa = locale === "ka";

  return (
    <div className="relative">
      {/* Glowing vertical line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-0.5 md:left-1/2 shadow-[0_0_8px_var(--glow)]"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--accent), transparent)",
        }}
      />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline dot with pulse on first item */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
              {index === 0 && (
                <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-accent shadow-[0_0_15px_var(--glow)]">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
              <div className="rounded-2xl glow-border glow-border-hover bg-card/80 backdrop-blur-sm p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {isKa ? exp.roleKa : exp.role}
                    </h3>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-accent font-medium text-sm">
                        {isKa ? exp.companyKa : exp.company}
                      </span>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-mono font-medium text-accent">
                    {formatDate(exp.startDate)} — {exp.endDate === "Present" ? (isKa ? "დღემდე" : "Present") : formatDate(exp.endDate)}
                  </span>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">
                  {isKa ? exp.descriptionKa : exp.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {(isKa ? exp.highlightsKa : exp.highlights).map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_4px_var(--glow)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {exp.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-mono font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
