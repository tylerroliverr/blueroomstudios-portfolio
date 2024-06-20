import Link from "next/link";
import getProjectData from "@/app/components/data/getProjectData";
import Image from "next/image";
import styles from "../../styles/projectDetails.module.css";

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
            <div className={styles.projectPageNavbar}>
                <p className={`${styles.projectPageNavItem} link`}
                >
                    [back]</p>
                <p className={`${styles.projectPageNavItem} link`}>
                    <Link target="_blank" href={`https://${project.visitSite}`}>
                        [visit site]
                    </Link>
                </p>
                <p className={`${styles.projectPageNavItem} ${styles.projectTitle}`}>{project.projectName}</p>
            </div>
            <div className={styles.projectPageInformation}>
                <div className={styles.projectDescription}>
                    <p>{project.projectDescription}</p>
                </div>
                <div className={styles.extraProjectInfo}>
                    <p>{project.development} <span className={styles.infoSeparator}>/</span> {project.technologies}</p>
                </div>
            </div>
            <div className={styles.projectPageImages}>
                {project.images.map((image, index) => (
                    <div className={styles.imageContainer} key={index}>
                    <Image
                        src={image.imagePath}
                        fill
                        alt='Project Image'
                        className={styles.projectImage}
                        priority
                        sizes="30vw">
                    </Image>
                    </div>
                ))}
            </div>
        </div>
    )
}