import Link from "next/link";
import getProjectData from "@/app/components/data/getProjectData";
import Image from "next/image";
import styles from "../../styles/projectDetails.module.css";
import style from "../../styles/projectDetailsUpdated.module.css";
import Lightbox from "@/app/components/Lightbox";
import CursorHoverLink from "@/app/components/CursorLinkHover";
import HorizontalScrollContainer from "@/app/components/HorizontalScroll";
import CursorTrail from "@/app/components/CursorTrailProjectPage";

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
      <CursorTrail />

      <div className={style.projectPageSplit}>
        <div className={`${style.projectPageInformation} project-page-star-mobile`}>
          {/* <div className={style.projectTitleDiv}>
            <p>{project.projectName}</p>
          </div> */}
          <div className={`${style.fancyTitleDivMobile}`}>
            <p className={style.projectTitleFancyMobile}>{project.projectName}</p>
          </div>
          <div className={styles.projectDescription}>
            <p>{project.projectDescription}</p>
          </div>
          <div className={styles.extraProjectInfo}>
            <div className={styles.projectDetails}>
              <p className={styles.projectDetailsTitle}>
                <span className={styles.projectTypes}>Year</span>
              </p>
              <p>{project.year}</p>
            </div>
            <div className={styles.projectDetails}>
              <p className={styles.projectDetailsTitle}>
                <span className={styles.projectTypes}>Tech</span>
              </p>
              <p>{project.technologies}</p>
            </div>
            <div className={styles.projectDetails}>
              <p className={styles.projectDetailsTitle}>
                <span className={styles.projectTypes}>Design</span>
              </p>
              <p>{project.design}</p>
            </div>
            <div className={styles.projectDetails}>
              <p className={styles.projectDetailsTitle}>
                <span className={styles.projectTypes}>Development</span>
              </p>
              <p>{project.development}</p>
            </div>
          </div>

          {/* Visit Site */}
          <div className={`${styles.projectVisitLink} link`}>

            {project.visitSite ? (
              <Link target="_blank" href={project.visitSite}>
                <div className={`${styles.projectDetails} link`}>
                  <p className={`${styles.projectDetailsTitle} ${styles.projectTypes}`}>
                    Visit site{" "}
                  </p>
                  <p className={styles.linkText}>
                    {getDomain(project.visitSite)}
                  </p>

                </div>
              </Link>
            ) : (
              <span>Work in progress</span>
            )}
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
        <HorizontalScrollContainer className={style.projectPageImages}>
          {project.images.map((image, index) => (
            <div className={`${style.imageContainer} gallery`} key={index}>
              <img
                src={image.imagePath}
                alt="Project Image"
                className={style.projectImage}
              />

            </div>
          ))}
        </HorizontalScrollContainer>

        <div className={`${style.fancyTitleDiv} project-page-star`}>
          <p className={style.projectTitleFancy}>{project.projectName}</p>
        </div>
      </div>
    </>
  );
}
