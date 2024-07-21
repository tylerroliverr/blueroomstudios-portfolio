'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import style from "../styles/projectNav.module.css";
import { TransitionLink } from './TransitionLink';

export default function ProjectNavItem({ project, listDiv }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this breakpoint as needed
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    if (isMobile) {
        return (
            <div className={style.projectNav}>
                <TransitionLink href={`/projects/${project.currentSlug}`}>
                    <p className="projectNavItem link">{project.projectName}</p>
                </TransitionLink>
            </div>
        );
    }

    return (
        <div>
            <TransitionLink
                href={`/projects/${project.currentSlug}`}
                className={style.projectNav}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <p className="projectNavItem link">{project.projectName}</p>
            </TransitionLink>
            {isHovered && listDiv}
        </div>
    );
}