"use client";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import ProjectNav from "./ProjectNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "../styles/navbar.module.css";
import CursorHoverLink from "./CursorLinkHover";

export default function Navbar() {
  const pathname = usePathname();
  const isProjectPage = pathname === "/project";
  const hideProjectNav = isProjectPage ? null : <ProjectNav />;

  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => { //update the innerHTML when menu is interacted with
    menuOpen();
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  const menuOpen = () => {
    const menuButton = document.querySelector(".menuButton");
    if (isMenuOpen) {
      menuButton.innerHTML = "Close";
    } else {
      menuButton.innerHTML = "Info";
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  }

  return (
    <>
      <div className="star-text-div">
        <p className="star-text"></p>
      </div>
      <CursorHoverLink />
      <div className={style.navbar}>
        <p className={`${style.title} logo link`}><Link href={"/"} onClick={closeMenu}><span className={style.titleSpacer}>B</span>lueroom</Link></p>
        <div className={style.menuDiv}>
          <p onClick={toggleMenu} className={`${style.link} link`}>
            <span className="menuButton">Info</span>
          </p>
        </div>
      </div>
      {isMenuOpen ? (<Menu />) : (null)}
    </>
  )
}