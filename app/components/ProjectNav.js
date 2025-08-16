import Link from "next/link";
import getProjectData from "./data/getProjectData";
import style from "../styles/projectNav.module.css";
import CursorHoverLink from "./CursorLinkHover";
import ProjectHovered from "./ProjectHovered";
import { TransitionLink } from "./TransitionLink";
import ProjectImageCycle from "./ProjectImageCycle";
// import styles from "../styles/projectNavUpdated.module.css";
import styles from "../styles/projectNavNew.module.css";

export default async function ProjectNav() {
  const projectData = await getProjectData();

  return (
    <>
      {/* <div className={styles.welcomeContainer}>
        <p>Welcome to blueroom studios, a creative web design & development agency. </p>
      </div> */}
      {/* <div>
        <div className={styles.projectContainer}>
          {projectData.map((project, index) => (
            <div className={styles.projectImageContainer} key={index}>
              <TransitionLink href={`/projects/${project.currentSlug}`}>
                <img
                  src={project.images[0].imagePath}
                  className={styles.projectImage}
                />
                <div className={styles.projectNameDiv}>
                  <p className={styles.projectName}>{project.projectName}</p>
                  <p className={`${styles.typeOfWork} ${styles.projectName}`}>{project.typeOfWork}</p>
                </div>
                <div className={styles.projectNamebackground}></div>
              </TransitionLink>
            </div>
          ))}
        </div>
      </div> */}

      <div className={styles.pageContainer}>

        <div className={styles.aboutContainer}>
          <p>Blueroom studios is a creative agency specialising in website design and development. Run by Tyler as a freelance agency from Melbourne, Naarm. Blueroom aims to create beautiful digital online works through these mediums to portray brands, portfolios and the like in a unique way.</p>
          <br></br>
          <p>In the realm of web design, Tylers journey spans over a decade. Bringing a unique touch to each project, combining a love ❦ for <span className={styles.soft}>soft</span>, <span className={styles.bold}>bold</span>, and <span className={styles.minimal}>minimal</span> aesthetics.</p>
          <br></br>
          <p>More than just designing and building websites, blueroom crafts digital experiences that bring those genuine wow moments.</p>
        </div>

        <div className={styles.projectContainer}>
          {projectData.map((project, index) => (
            <div className={`${styles.projectImageContainer}`} key={index}>
              <TransitionLink href={`/projects/${project.currentSlug}`}>
                <img
                  src={project.images[0].imagePath}
                  className={styles.projectImage}
                />
                <div className={styles.projectNameDiv}>
                  <p className={styles.projectName}>{project.projectName}</p>
                  <p className={styles.projectName}>{project.typeOfWork}</p>
                </div>
              </TransitionLink>
            </div>
          ))}
        </div>

      </div>

    </>
  )
}
