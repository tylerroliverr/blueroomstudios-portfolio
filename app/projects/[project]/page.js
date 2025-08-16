import Link from "next/link";
import getProjectData from "@/app/components/data/getProjectData";
import Image from "next/image";
import styles from "../../styles/projectDetails.module.css";
import style from "../../styles/projectDetailsUpdated.module.css";
import BackButton from "@/app/components/BackButton";
import Lightbox from "@/app/components/Lightbox";
import CursorHoverLink from "@/app/components/CursorLinkHover";

export async function generateStaticParams() {
  const projectData = await getProjectData();
  return projectData.map((project) => ({
    project: project.currentSlug,
  }));
}

export default async function ProjectPage({ params }) {

  const projectData = await getProjectData();
  const project = projectData.find((proj) => proj.currentSlug === params.project);

  return (
    <>
      <CursorHoverLink />
      <Lightbox />
      <div className={style.projectPageSplit}>
        <div className={style.projectPageInformation}>
          <div className={style.projectTitleDiv}>
            <p>{project.projectName}</p>
          </div>
          <div className={styles.projectDescription}>
            <p>{project.projectDescription}</p>
          </div>
          <div className={styles.extraProjectInfo}>
            <p><span className={styles.projectTypes}>Year</span> {project.year}</p>
            <p><span className={styles.projectTypes}>Tech</span> {project.technologies}</p>
            <p><span className={styles.projectTypes}>Design</span> {project.design}</p>
            <p><span className={styles.projectTypes}>Development</span> {project.development}</p>
          </div>
          <div className={style.projectPageNavButtons}>
            <p className={`${styles.projectPageNavItem} link`}>
              {project.visitSite !== null ? (
                <Link target="_blank" href={`${project.visitSite}`}>
                  Visit site <span className={styles.linkText}> {project.visitSite
                    ?.replace(/^https?:\/\/(www\.)?/, "")
                    .replace(/\/$/, "")
                  } </span>
                </Link>
              ) : (
                <span>Work in progress</span>
              )}
            </p>
          </div>
          {/* <div className={`${styles.projectPageNavButtons} ${styles.backButtonDiv}`}>
            <BackButton />
          </div> */}
        </div>
        <div className={style.projectPageImages}>
          {project.images.map((image, index) => (
            <div className={`${style.imageContainer} gallery`} key={index}>
              <img
                src={image.imagePath}
                alt='Project Image'
                title=""
                className={style.projectImage}>
              </img>
              {/* <p className={style.counter}>[{index + 1}/{project.images.length}]</p> */}
            </div>
          ))}
        </div>
        <div className={style.fancyTitleDiv}>
          <p className={style.projectTitleFancy}>{project.projectName}</p>
        </div>
      </div>
    </>
  )
}