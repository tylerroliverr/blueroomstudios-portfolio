"use client";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import ProjectNav from "./ProjectNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "../styles/navbar.module.css";

export default function Navbar() {

   const pathname = usePathname();
   const isProjectPage = pathname === "/project";
   const hideProjectNav = isProjectPage ? null : <ProjectNav />;

   const [isMenuOpen, setMenuOpen] = useState(false);

   useEffect(() => { //update the innerHTML when menu is interacted with
      menuOpen();
   }, [isMenuOpen]);

   const menuOpen = () => {
      const menuButton = document.querySelector(".menuButton");
      if (isMenuOpen) {
         menuButton.innerHTML = "[close]";
      } else {
         menuButton.innerHTML = "[menu]";
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
         <div className={style.navbar}>
            <p className={`${style.title} logo link`}><Link href={"/"} onClick={closeMenu}>blueroom studios</Link></p>
            <div>
               <p onClick={toggleMenu} className="link">
                  <span className="menuButton">[menu]</span> {/* menuButton class only for menuOpen function */}
                  <span className={style.star}>★</span>
               </p>
            </div>
         </div>
         {isMenuOpen ? (<Menu />) : (null)}
      </>
   )
}