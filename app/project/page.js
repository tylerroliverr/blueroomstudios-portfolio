import Link from "next/link";

export default function ProjectPage() {
    return (
        <>
            <div className="projectPageNavbar">
                <p className="projectPageNavItem">[back]</p>
                <p className="projectPageNavItem">
                    <Link target="_blank" href={"www.google.com"}>
                        [visit site]
                    </Link>
                </p>
                <p className="projectPageNavItem">insert project name</p> {/* sanity slug something or rather here */}
            </div>
        </>
    )
}