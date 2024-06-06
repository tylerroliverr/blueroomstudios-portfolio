"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectPage({ params }) {

   const router = useRouter();

    return (
        <>
            <div className="projectPageNavbar">
                <p className="projectPageNavItem link"
                  onClick={() => router.back()}>
                     [back]</p>
                <p className="projectPageNavItem link">
                    <Link target="_blank" href={"www.google.com"}>
                        [visit site]
                    </Link>
                </p>
                <p className="projectPageNavItem projectTitle">insert project name</p> {/* sanity slug something or rather here */}
            </div>
        </>
    )
}