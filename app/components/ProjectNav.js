import Link from "next/link";
import getProjectData from "./data/getProjectData";
import style from "../styles/projectNav.module.css";
import CursorHoverLink from "./CursorLinkHover";

export default async function ProjectNav() {

    const projectData = await getProjectData();

    return (
        <div className={style.projectNavMainContainer}>
            <CursorHoverLink />
            {projectData.map((project, index) => (
                <div className={style.projectNav} key={index}>
                    <Link href={`/projects/${project.currentSlug}`}>
                        <p className="projectNavItem link">{project.projectName}</p>
                    </Link>
                </div>
            ))}
            <p className={style.projectNav}>add acknowledgment somewhere</p>

            <div className={style.lastUpdatedDiv}>
                <p className={style.lastUpdatedText}>last updated: 03/07/2024</p>
            </div>
        </div>
    )
}