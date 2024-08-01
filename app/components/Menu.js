"use client";
import About from "./About";
import EmailButton from "./EmailButton";
import EmailButtonFooter from "./EmailButtonFooter";
import Services from "./Services";
import { useState, useEffect } from "react";
import style from "../styles/menu.module.css";
import CursorHoverLink from "./CursorLinkHover";
import Acknowledge from "./Acknowledge";
import { ThemeButtons } from "./ThemeButtons";
import Contact from "./Contact";
import GlassLogo from "./3DCanvas";
import { ThemeFolder } from "./ThemeFolder";

export default function Menu() {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <CursorHoverLink />
      <div className={style.menuContainer}>
        <div className={style.menuOpen}>
          <p className={`${style.menuItem} about link`} //about class for menu interactions function
            onClick={() => toggleSection('about')}>
            [About]</p>
          <p className={`${style.menuItem} services link`} //services class for menu interactions function
            onClick={() => toggleSection('services')}>
            [Services]</p>
          <p className={`${style.menuItem} contact link`} //contact class for menu interactions function
            onClick={() => toggleSection('contact')}>
            [Contact]</p>
          <p className={`${style.menuItem} acknowledgement link`}
            onClick={() => toggleSection('acknowledge')}>
            [Acknowledgement]</p>
          <p className={`${style.menuItem} acknowledgement link`}
            onClick={() => toggleSection('theme')}>
            [Theme]</p>
        </div>
        <div className={style.modelContainer}>
          <GlassLogo />
        </div>
        {openSection === 'about' && <About />}
        {openSection === 'services' && <Services />}
        {openSection === 'contact' && <Contact />}
        {openSection === 'acknowledge' && <Acknowledge />}
        {openSection === 'theme' && <ThemeFolder />}
      </div>
      <div className={style.menuFooter}>
        <ThemeButtons />
        <div className={style.contactButton}>
          <EmailButtonFooter />
        </div>
      </div>
    </>
  )
}