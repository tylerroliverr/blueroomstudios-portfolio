import Link from "next/link";
import getProjectData from "@/app/components/data/getProjectData";
import Image from "next/image";
import styles from "../../styles/projectDetails.module.css";
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
        <div className={styles.projectPage}>
            <CursorHoverLink />
            <Lightbox />
            <div className={styles.projectPageSplit}>
                <div className={styles.projectPageInformation}>
                    <div className={styles.projectPageNavbar}>
                        <div className={styles.projectPageTitleDiv}>
                            <p className={`${styles.projectPageNavItem} ${styles.projectTitle}`}>{project.projectName}</p>
                        </div>
                        <div className={styles.projectPageNavButtons}>
                            <BackButton />
                            <p className={`${styles.projectPageNavItem} link`}>
                                {project.visitSite !== null ? (
                                    <Link target="_blank" href={`${project.visitSite}`}>
                                        [Visit Site]
                                    </Link>
                                ) : (
                                    <span>[Work In Progress]</span>
                                )}
                            </p>
                        </div>
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
                </div>
                <div className={styles.projectPageImages}>
                    {project.images.map((image, index) => (
                        <div className={`${styles.imageContainer} gallery`} key={index}>
                            <img
                                src={image.imagePath}
                                alt='Project Image'
                                title=""
                                className={styles.projectImage}>
                            </img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

{/* 
    <Image
        src={image.imagePath}
        fill
        alt='Project Image'
        className={styles.projectImage}
        priority
        sizes="100vw"
        quality={100}>
    </Image>
*/}