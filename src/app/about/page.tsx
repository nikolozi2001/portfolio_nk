"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Code, Coffee, MapPin, GraduationCap } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

export default function AboutPage() {
  const { t } = useLocale();

  const stats = [
    { icon: Code, label: t.about.statYears, value: "7+" },
    { icon: GraduationCap, label: t.about.statEducation, value: t.about.statEducationValue },
    { icon: Coffee, label: t.about.statProjects, value: "80+" },
    { icon: MapPin, label: t.about.statLocation, value: t.about.statLocationValue },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title={t.about.title}
        subtitle={t.about.subtitle}
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-5">
        {/* Photo */}
        <AnimatedSection className="lg:col-span-2">
          <div className="aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/20 to-accent-light/20">
            <div className="flex h-full items-center justify-center">
              <span className="text-8xl font-bold text-accent/30">NK</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Bio */}
        <AnimatedSection className="lg:col-span-3 space-y-6" delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
            <p>{t.about.bio3}</p>
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
