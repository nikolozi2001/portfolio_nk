"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Course } from "@/data/courses";
import { useLocale } from "@/hooks/useLocale";
import { cn } from "@/lib/utils";

interface CoursesGridProps {
  courses: Course[];
}

function getScoreColor(score: number) {
  if (score >= 90) return "text-accent-secondary";
  if (score >= 71) return "text-accent";
  return "text-muted-foreground";
}

function getBarColor(score: number) {
  if (score >= 90) return "from-accent-secondary to-accent";
  if (score >= 71) return "from-accent to-accent-light";
  return "from-muted-foreground to-muted-foreground";
}

export function CoursesGrid({ courses }: CoursesGridProps) {
  const { locale, t } = useLocale();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { value: "all", label: t.courses.all },
    { value: "cs", label: t.courses.cs },
    { value: "cyber", label: t.courses.cyber },
    { value: "math", label: t.courses.math },
    { value: "general", label: t.courses.general },
  ];

  const filtered = activeCategory === "all"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => b.score - a.score);

  return (
    <div>
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-mono font-medium transition-colors",
              activeCategory === cat.value
                ? "bg-accent text-white shadow-[0_0_10px_var(--glow)]"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Course cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((course, index) => (
          <motion.div
            key={course.nameKa}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-xl glow-border glow-border-hover bg-card/80 backdrop-blur-sm p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <GraduationCap className="h-4 w-4 text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm truncate">
                  {locale === "ka" ? course.nameKa : course.name}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span className={cn("text-lg font-bold font-mono", getScoreColor(course.score))}>
                    {course.score}
                  </span>
                  <span className="text-xs text-muted-foreground">/ 100</span>
                  <span className="text-xs text-muted-foreground ml-auto font-mono">
                    {course.credits} {t.courses.credits}
                  </span>
                </div>
                {/* Score bar */}
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-muted/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${course.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r shadow-[0_0_6px_var(--glow)]",
                      getBarColor(course.score)
                    )}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
