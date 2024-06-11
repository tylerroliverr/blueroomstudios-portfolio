import Link from "next/link";
import getProjectData from "@/app/components/data/getProjectData";
import Image from "next/image";

export async function generateStaticParams() {
    const projectData = await getProjectData();
    return projectData.map((project) => ({
        project: project.currentSlug,
    }));
}

export default async function ProjectPage({ params }) {

    const projectData = await getProjectData();
    const project = projectData.find((proj) => proj.currentSlug === params.project);

    console.log(project);

    return (
        <div className="projectPage">
            <div className="projectPageNavbar">
                <p className="projectPageNavItem link"
                >
                    [back]</p>
                <p className="projectPageNavItem link">
                    <Link target="_blank" href={`https://${project.visitSite}`}>
                        [visit site]
                    </Link>
                </p>
                <p className="projectPageNavItem projectTitle">{project.projectName}</p> {/* sanity slug something or rather here */}
            </div>
            <div className="projectPageInformation">
                <div className="projectDescription">
                    <p>{project.projectDescription}</p>
                </div>
                <div className="extraProjectInfo">
                    <p>{project.development} <span className="infoSeparator">/</span> {project.technologies}</p>
                </div>
            </div>
            <div className="projectPageImages">
                {project.images.map((image, index) => (
                    <div className="imageContainer" key={index}>
                    <Image
                        src={image.imagePath}
                        fill
                        alt='Project Image'
                        className="projectImage"
                        priority
                        sizes="30vw">
                    </Image>
                    </div>
                ))}
            </div>
        </div>
    )
}