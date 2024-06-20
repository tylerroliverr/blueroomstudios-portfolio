import Link from "next/link";
import getProjectData from "./data/getProjectData";
import style from "../styles/projectNav.module.css";

export default async function ProjectNav() {

    const projectData = await getProjectData();

    return (
        <>
            {projectData.map((project, index) => (
                <div className={style.projectNav} key={index}>
                    <Link href={`/projects/${project.currentSlug}`}>
                        <p className="projectNavItem link">{project.projectName}</p>
                    </Link>
                </div>
            ))}
        </>
    )
}