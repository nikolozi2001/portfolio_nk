"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/sections/Timeline";
import { CoursesGrid } from "@/components/sections/CoursesGrid";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experiences } from "@/data/experience";
import { courses } from "@/data/courses";
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
          className="inline-flex items-center gap-2 rounded-xl border border-accent/20 bg-card/80 backdrop-blur-sm px-5 py-2.5 text-sm font-mono font-medium glow-border-hover transition-all hover:bg-muted"
        >
          <Download className="h-4 w-4" />
          {t.experience.downloadResume}
        </Link>
      </AnimatedSection>

      <div className="mt-16">
        <Timeline experiences={experiences} />
      </div>

      {/* University Courses */}
      <div className="mt-24">
        <SectionHeading
          title={t.courses.title}
          subtitle={t.courses.subtitle}
        />
        <div className="mt-12">
          <CoursesGrid courses={courses} />
        </div>
      </div>
    </div>
  );
}
