"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/sections/Timeline";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experiences } from "@/data/experience";
import { useLocale } from "@/hooks/useLocale";
import Link from "next/link";
import { Download } from "lucide-react";

export default function ExperiencePage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <AnimatedSection className="mt-6 flex justify-center">
        <Link
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          <Download className="h-4 w-4" />
          {t.experience.downloadResume}
        </Link>
      </AnimatedSection>

      <div className="mt-16">
        <Timeline experiences={experiences} />
      </div>
    </div>
  );
}
