"use client";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import ProjectNav from "./ProjectNav";
import { usePathname } from "next/navigation";

export default function Navbar() {

   const pathname = usePathname();
   const isProjectPage = pathname === "/project";
   const hideProjectNav = isProjectPage ? null : <ProjectNav />;

   const [isMenuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
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

   return (
      <>
         <div className="navbar">
            <p className="title">blueroom studios</p>
            <div>
               <p onClick={toggleMenu} className="link">
                  <span className="menuButton link">[menu]</span>
                  <span className="star">★</span>
               </p>
            </div>
         </div>
         {isMenuOpen ? ( <Menu /> ) : ( null )}
      </>
   )
}