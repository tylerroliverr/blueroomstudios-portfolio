import Link from "next/link";
import getProjectData from "./data/getProjectData";

export default async function ProjectNav() {

    const projectData = await getProjectData();

    return (
        <>
            {projectData.map((project, index) => (
                <div className="projectNav" key={index}>
                    <Link href={`/projects/${project.currentSlug}`}>
                        <p className="projectNavItem link">{project.projectName}</p>
                    </Link>
                </div>
            ))}
        </>
    )
}