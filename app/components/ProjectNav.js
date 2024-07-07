import Link from "next/link";
import getProjectData from "./data/getProjectData";
import style from "../styles/projectNav.module.css";
import CursorHoverLink from "./CursorLinkHover";

export default async function ProjectNav() {

    const projectData = await getProjectData();
    const projectImages = projectData.images;

    return (
        <div className={style.projectNavMainContainer}>
            <CursorHoverLink />
            <div className={style.navList}>
                {projectData.map((project, index) => (
                    <div className={style.projectNav} key={index}>
                        <Link href={`/projects/${project.currentSlug}`}>
                            <p className="projectNavItem link">{project.projectName}</p>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={style.listDiv}>
                {projectData.map((project, index) => (
                    <div className={style.projectsList} key={index}>
                        <Link href={`/projects/${project.currentSlug}`}>
                        <div className={style.listImgContainer}>
                            <img
                                className={style.listImage}
                                alt={project.images[0].imagePath}
                                src={project.images[0].imagePath}
                            />
                        </div>
                        </Link>
                        <p className={style.listTitle}>[{project.projectName}]</p>
                    </div>
                ))}
            </div>
            <div className={style.lastUpdatedDiv}>
                <p className={style.lastUpdatedText}>last updated: 07/07/2024</p>
            </div>
        </div>
    )
}