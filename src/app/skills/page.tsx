"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

const categories = [
  { value: "all", label: "All" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "tools", label: "Tools" },
  { value: "design", label: "Design" },
];

export default function SkillsPage() {
  const [active, setActive] = useState("all");

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="The tools and technologies I use to bring ideas to life."
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
