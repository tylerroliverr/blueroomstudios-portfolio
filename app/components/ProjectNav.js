// ProjectNav.jsx (Server Component)

import ProjectNavClient from "./ProjectNavClient";
import getProjectData from "./data/getProjectData";

export default async function ProjectNav() {
  const projectData = await getProjectData();

  return <ProjectNavClient projectData={projectData} />;
}