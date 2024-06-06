import Link from "next/link";
import getProjectData from "./data/getProjectData";

export default async function ProjectNav() {

    const projectData = await getProjectData();

    return (
        <>
            <div className="projectNav">
               <Link href={`/project/${projectData.currentSlug}`}>
                  <p className="projectNavItem link">1107®</p>
               </Link>
                <p className="projectNavItem link">hayden riley</p>
                <p className="projectNavItem link">the bluespace</p>
                <p className="projectNavItem link">20th century</p>
                <p className="projectNavItem link">fragility</p>
                <p className="projectNavItem link">you took your time</p>
                <p className="projectNavItem link">tulsi vanstone</p>
            </div>
        </>
    )
}