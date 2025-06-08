import Link from "next/link";
import getProjectData from "./data/getProjectData";
import style from "../styles/projectNav.module.css";
import CursorHoverLink from "./CursorLinkHover";
import ProjectHovered from "./ProjectHovered";
import { TransitionLink } from "./TransitionLink";
import ProjectImageCycle from "./ProjectImageCycle";

export default async function ProjectNav() {
  const projectData = await getProjectData();

  return (
    <>
      <div className="star-text-div">
        <p className="star-text"></p>
      </div>
      <div className={style.projectNavMainContainer}>
        <CursorHoverLink />
        <div className={style.navList}>
          {projectData.map((project, index) => (
            <ProjectHovered
              key={index}
              project={project}
              listDiv={
                <div className={style.listDiv}>
                  <div className={style.projectsList}>
                    <TransitionLink href={`/projects/${project.currentSlug}`}>
                      <div className={style.listImgContainer}>
                        <div className={style.listTitleDiv}>
                          <p className={style.listTitle}>{project.projectName}</p>
                        </div>
                        <img
                          className={style.listImage}
                          alt={project.images[0].imagePath}
                          src={project.images[0].imagePath}
                        />
                      </div>
                    </TransitionLink>
                  </div>
                </div>
              }
            />
          ))}
        </div>
        <div className={`${style.listDiv} ${style.mobileListDiv}`}>
          {projectData.map((project, index) => (
            <div className={style.projectsList} key={index}>
              <TransitionLink href={`/projects/${project.currentSlug}`}>
                <div className={style.listImgContainer}>
                  <div className={style.listTitleDiv}>
                    <p className={style.listTitleMobile}>{project.projectName}</p>
                  </div>
                  <ProjectImageCycle
                    images={project.images}
                    altText={project.images[0]?.imagePath}
                    delayOffset={index * 250}
                  />
                </div>
              </TransitionLink>
            </div>
          ))}
        </div>
        <div className={style.lastUpdatedDiv}>
          <p className={style.lastUpdatedText}>last updated: 13/04/2025</p>
        </div>
      </div>
    </>
  )
}
