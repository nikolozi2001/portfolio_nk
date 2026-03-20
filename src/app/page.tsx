import { getProjects } from "@/lib/getProjects";
import { HomePageClient } from "@/components/pages/HomePageClient";

export default async function HomePage() {
  const projects = await getProjects();
  return <HomePageClient projects={projects} />;
}
