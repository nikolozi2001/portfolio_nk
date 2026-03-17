import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/sections/Timeline";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { experiences } from "@/data/experience";
import Link from "next/link";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional experience and career journey.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey and the companies I've worked with."
      />

      <AnimatedSection className="mt-6 flex justify-center">
        <Link
          href="/resume.pdf"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </Link>
      </AnimatedSection>

      <div className="mt-16">
        <Timeline experiences={experiences} />
      </div>
    </div>
  );
}
