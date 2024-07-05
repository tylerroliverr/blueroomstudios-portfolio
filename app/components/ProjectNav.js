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

            <div className={style.lastUpdatedDiv}>
                <p className={style.lastUpdatedText}>last updated: 03/07/2024</p>
            </div>

            <div className={style.acknowledgmentDiv}>
                <p>Blueroom wishes to acknowledge the traditional owners of the land on which we operate on, the Wurundjeri people of the Kulin Nation, and pay my respects to their Elders past, present and emerging.</p>
            </div>
        </div>
    )
}