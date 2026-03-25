"use client";

import { useRef } from "react";
import Link from "next/link";
import CursorTrail from "./CursorTrail";
import { TransitionLink } from "./TransitionLink";
import styles from "../styles/projectNavNew.module.css";
import Image from "next/image";

export default function ProjectNavClient({ projectData }) {
  const pageRef = useRef(null);

  return (
    <div ref={pageRef} className={styles.pageContainer}>
      <CursorTrail containerRef={pageRef} />

      <div className={styles.mainHero}>
        <div className={styles.aboutContainer}>
          <div>
            <p>Blueroom studios is a creative agency specialising in website design and development. Run by Tyler as a freelance agency from Melbourne, Naarm. Blueroom aims to create beautiful digital online works through these mediums to portray brands, portfolios and the like in a unique way.</p> <br></br> <p>In the realm of web design, Tylers journey spans over a decade. Bringing a unique touch to each project, combining a love ❦ for <span className={styles.soft}>soft</span>, <span className={styles.bold}>bold</span>, and <span className={styles.minimal}>minimal</span> aesthetics.</p>
          </div>
        </div>
        <div className={styles.servicesContainer}>
          <div className="title-star-holder">
            Services
          </div>
          <p>Front-end Development</p>
          <p>E-commerce Development</p>
          <p>Custom Shopify Templates</p>
          <p>Website Design</p>
          <p>UI/UX Design</p>
        </div>
        <div className="main-hero-star">
          <span className="hero-star"></span>
        </div>
        <div className={styles.chevron}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.chevronsvg} viewBox="0 0 16 16">
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </div>
      </div>

      <div className={styles.projectContainer}>
        {projectData.map((project, index) => (
          <div className={styles.projectImageContainer} key={index}>
            <TransitionLink href={`/projects/${project.currentSlug}`}>
              <div className={styles.projectNameDiv}>
                <p className={styles.projectName}>{project.projectName}</p>
                <p>{project.typeOfWork}</p>
              </div>
              <img
                src={project.images[0].imagePath}
                className={styles.projectImage}
              />
            </TransitionLink>
          </div>
        ))}
      </div>
      <div className={styles.ackDiv}>
        <p>Blueroom wishes to acknowledge the traditional owners of the land on which we operate on, the Wurundjeri people of the Kulin Nation, and pay my respects to their Elders past, present and emerging. <span className={styles.ackMobile}>No more violence.</span></p>
        <p className={styles.ackNormal}>No more violence.</p>
      </div>
    </div>
  );
}