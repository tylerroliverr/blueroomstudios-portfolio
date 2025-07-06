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
      <TransitionLink href={`/projects/${project.currentSlug}`}>
        <div className={style.navListMobile}>
          <div className={style.projectNav}>
            <p className="projectNavItem">{project.projectName} -</p>
          </div>
          <div className={`${style.projectNav} ${style.projectNavType}`}>
            <p className="projectNavItem typeOfWork">{project.typeOfWork}</p>
          </div>
        </div>
      </TransitionLink>
    );
  }

  return (
    <>
      <TransitionLink
        href={`/projects/${project.currentSlug}`}
        className={`${style.projectNav} link`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={style.projectItemDesk}>
          <div className={`${style.projectItem}`}>
            <p className={`projectNavItem ${style.projectItemTitle}`}>{project.projectName}</p>
          </div>
          <div className={`${style.projectItem}`}>
            <p className={style.projectNavType}>{project.typeOfWork}</p>
          </div>
        </div>
      </TransitionLink >
      {isHovered && listDiv}
    </>
  );
}