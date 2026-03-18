"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { skills } from "@/data/skills";
import { useLocale } from "@/hooks/useLocale";
import { cn } from "@/lib/utils";

export default function SkillsPage() {
  const [active, setActive] = useState("all");
  const { t } = useLocale();

  const categories = [
    { value: "all", label: t.skills.all },
    { value: "frontend", label: t.skills.frontend },
    { value: "backend", label: t.skills.backend },
    { value: "tools", label: t.skills.tools },
    { value: "design", label: t.skills.design },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              active === cat.value
                ? "bg-accent text-white"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-10">
        <SkillsGrid skills={skills} category={active} />
      </div>
    </div>
  );
}
