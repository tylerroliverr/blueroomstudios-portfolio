import Link from "next/link";
import getProjectData from "./data/getProjectData";
import style from "../styles/projectNav.module.css";
import CursorHoverLink from "./CursorLinkHover";
import ProjectHovered from "./ProjectHovered";
import { TransitionLink } from "./TransitionLink";
import ProjectImageCycle from "./ProjectImageCycle";
import styles from "../styles/projectNavUpdated.module.css";

export default async function ProjectNav() {
  const projectData = await getProjectData();

  return (
    <>
      {/* <div className={styles.welcomeContainer}>
        <p>Welcome to blueroom studios, a creative web design & development agency. </p>
      </div> */}
      <div>
        <div className={styles.projectContainer}>
          {projectData.map((project, index) => (
            <div className={styles.projectImageContainer} key={index}>
              <TransitionLink href={`/projects/${project.currentSlug}`}>
                <img
                  src={project.images[0].imagePath}
                  className={styles.projectImage}
                />
                <p className={styles.projectName}>{project.projectName}</p>
              </TransitionLink>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
