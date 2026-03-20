const GITHUB_USERNAME = "nikolozi2001";
const GITHUB_API = "https://api.github.com";

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
  created_at: string;
  fork: boolean;
  archived: boolean;
}

/**
 * Fetch all public repos from GitHub API.
 * Uses ISR (revalidate) so it refreshes periodically on Vercel.
 */
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const allRepos: GitHubRepo[] = [];
  let page = 1;
  const perPage = 100;

  try {
    while (true) {
      const url = `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=${perPage}&page=${page}&sort=updated&direction=desc`;
      const res = await fetch(url, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Optional: add GITHUB_TOKEN for higher rate limits
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 }, // revalidate every 1 hour
      });

      if (!res.ok) {
        console.error(`GitHub API error: ${res.status} ${res.statusText}`);
        break;
      }

      const repos: GitHubRepo[] = await res.json();
      if (repos.length === 0) break;

      allRepos.push(...repos);
      if (repos.length < perPage) break;
      page++;
    }
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
  }

  return allRepos;
}

/**
 * Convert GitHub language to a category guess.
 */
export function guessCategory(
  repo: GitHubRepo
): "frontend" | "fullstack" | "mobile" | "other" {
  const name = repo.name.toLowerCase();
  const desc = (repo.description || "").toLowerCase();
  const lang = (repo.language || "").toLowerCase();

  // Mobile
  if (
    name.includes("mobile") ||
    name.includes("expo") ||
    name.includes("react-native") ||
    desc.includes("react native") ||
    desc.includes("mobile app")
  ) {
    return "mobile";
  }

  // Fullstack: has backend indicators
  if (
    name.includes("api") ||
    name.includes("backend") ||
    name.includes("server") ||
    desc.includes("full-stack") ||
    desc.includes("fullstack") ||
    desc.includes("backend")
  ) {
    return "fullstack";
  }

  // Backend languages
  if (["python", "php", "java", "go", "rust", "c#"].includes(lang)) {
    return "fullstack";
  }

  return "frontend";
}

/**
 * Convert GitHub language to tags
 */
export function languageToTags(repo: GitHubRepo): string[] {
  const tags: string[] = [];
  if (repo.language) tags.push(repo.language);
  if (repo.topics?.length) {
    tags.push(...repo.topics.slice(0, 3));
  }
  return tags.length > 0 ? tags : ["Code"];
}

/**
 * Convert repo name to a readable title
 */
export function repoNameToTitle(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Convert repo updated_at to YYYY-MM format
 */
export function repoToDate(repo: GitHubRepo): string {
  const d = new Date(repo.updated_at);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}
