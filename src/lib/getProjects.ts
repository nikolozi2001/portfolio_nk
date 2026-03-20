import { Project } from "@/types";
import {
  fetchGitHubRepos,
  guessCategory,
  languageToTags,
  repoNameToTitle,
  repoToDate,
  GitHubRepo,
} from "./github";
import { projectOverrides } from "@/data/project-overrides";

/**
 * Converts a GitHub repo name to a URL-friendly slug.
 */
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Convert a single GitHub repo + overrides into a Project.
 */
function repoToProject(repo: GitHubRepo): Project | null {
  const override = projectOverrides[repo.name];

  // Hidden repos
  if (override?.hidden) return null;

  // Skip forks unless explicitly overridden
  if (repo.fork && !override) return null;

  // Skip archived repos unless overridden
  if (repo.archived && !override) return null;

  const slug = toSlug(repo.name);
  const autoTitle = repoNameToTitle(repo.name);
  const autoDescription = repo.description || `${autoTitle} — built with ${repo.language || "code"}.`;
  const autoTags = languageToTags(repo);
  const autoCategory = guessCategory(repo);
  const autoDate = repoToDate(repo);

  return {
    slug,
    title: override?.title || autoTitle,
    description: override?.description || autoDescription,
    longDescription:
      override?.longDescription ||
      override?.description ||
      autoDescription,
    image: override?.image || `/projects/${slug}.png`,
    tags: override?.tags || autoTags,
    category: override?.category || autoCategory,
    liveUrl: override?.liveUrl || repo.homepage || undefined,
    githubUrl: repo.html_url,
    featured: override?.featured ?? false,
    date: override?.date || autoDate,
  };
}

/**
 * Fetch all projects: GitHub repos merged with overrides.
 * Called at build time (SSG/ISR).
 */
export async function getProjects(): Promise<Project[]> {
  const repos = await fetchGitHubRepos();

  const projects: Project[] = [];
  for (const repo of repos) {
    const project = repoToProject(repo);
    if (project) {
      projects.push(project);
    }
  }

  // Sort: featured first, then by date descending
  projects.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.date.localeCompare(a.date);
  });

  return projects;
}

/**
 * Get a single project by slug.
 */
export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}

/**
 * Get all slugs for static generation.
 */
export async function getAllProjectSlugs(): Promise<string[]> {
  const projects = await getProjects();
  return projects.map((p) => p.slug);
}
