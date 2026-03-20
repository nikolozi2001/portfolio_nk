import { getProjects } from "@/lib/getProjects";
import { ProjectsPageClient } from "@/components/pages/ProjectsPageClient";

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectsPageClient projects={projects} />;
}
