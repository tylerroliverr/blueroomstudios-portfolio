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
  const { project: projectSlug } = await params;

  const projectData = await getProjectData();

  const currentIndex = projectData.findIndex(
    (proj) => proj.currentSlug === projectSlug
  );

  // 🔹 Guard against missing project (e.g. bad/mismatched slug)
  if (currentIndex === -1) {
    return <div>Project not found.</div>; // or use notFound() from 'next/navigation'
  }

  const project = projectData[currentIndex];

  // Compute prev/next indexes (looping)
  const prevIndex =
    (currentIndex - 1 + projectData.length) % projectData.length;
  const nextIndex = (currentIndex + 1) % projectData.length;

  const prevProject = projectData[prevIndex];
  const nextProject = projectData[nextIndex];

  function getDomain(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch (e) {
      return url; // fallback if it's not a valid URL
    }
  }

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
            <p>
              <span className={styles.projectTypes}>Year</span> {project.year}
            </p>
            <p>
              <span className={styles.projectTypes}>Tech</span>{" "}
              {project.technologies}
            </p>
            <p>
              <span className={styles.projectTypes}>Design</span>{" "}
              {project.design}
            </p>
            <p>
              <span className={styles.projectTypes}>Development</span>{" "}
              {project.development}
            </p>
          </div>

          {/* Visit Site */}
          <div className={style.projectPageNavButtons}>
            <p className={`${styles.projectPageNavItem} link`}>
              {project.visitSite ? (
                <Link target="_blank" href={project.visitSite}>
                  Visit site{" "}
                  <span className={styles.linkText}>
                    {getDomain(project.visitSite)}
                  </span>
                </Link>
              ) : (
                <span>Work in progress</span>
              )}
            </p>
          </div>

          {/* Prev / Next buttons */}
          <div className={style.projectPageSwapButtons}>
            <Link href={`/projects/${prevProject.currentSlug}`}>
              <button className={`link ${styles.projectPageNavItem}`}>← Prev</button>
            </Link>
            <Link href={`/projects/${nextProject.currentSlug}`}>
              <button className={`link ${styles.projectPageNavItem}`}>Next →</button>
            </Link>
          </div>
        </div>

        {/* Images */}
        <div className={style.projectPageImages}>
          {project.images.map((image, index) => (
            <div className={`${style.imageContainer} gallery`} key={index}>
              <img
                src={image.imagePath}
                alt="Project Image"
                className={style.projectImage}
              />
            </div>
          ))}
        </div>

        <div className={style.fancyTitleDiv}>
          <p className={style.projectTitleFancy}>{project.projectName}</p>
        </div>
      </div>
    </>
  );
}
