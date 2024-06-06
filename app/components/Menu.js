"use client";
import About from "./About";
import EmailButton from "./EmailButton";
import EmailButtonFooter from "./EmailButtonFooter";
import Services from "./Services";
import { useState, useEffect } from "react";

export default function Menu() {

   const [isAboutOpen, setAboutOpen] = useState(false);
   const [isServicesOpen, setServicesOpen] = useState(false);

   useEffect(() => {
      handleMenuInactivity();
   }, [isAboutOpen, isServicesOpen]);

   const handleMenuInactivity = () => {
      const aboutButton = document.querySelector(".about");
      const servicesButton = document.querySelector(".services");

      if (isServicesOpen) {
         aboutButton.classList.add("menuInactive");
      } else {
         aboutButton.classList.remove("menuInactive");
      }

      if (isAboutOpen) {
         servicesButton.classList.add("menuInactive");
      } else {
         servicesButton.classList.remove("menuInactive");
      }
   }

   const handleAboutToggle = () => {
      setAboutOpen(!isAboutOpen);
      setServicesOpen(false);
   }

   const handleServicesToggle = () => {
      setServicesOpen(!isServicesOpen);
      setAboutOpen(false);
   }

    return (
        <>
            <div className="menuOpen">
                <p className="menuItem about link"
                  onClick={handleAboutToggle}>
                     [about]</p>
                <p className="menuItem services link"
                  onClick={handleServicesToggle}>
                     [services]</p>
                <EmailButton />
            </div>
            {isAboutOpen ? ( <About /> ) : ( null )}
            {isServicesOpen ? ( <Services /> ) : ( null )}
            <div className="menuFooter">
                <div className="themeButtons">
                    <p className="themeItem link">[blue]</p>
                    <p className="themeItem menuInactive link">[red]</p>
                    <p className="themeItem menuInactive link">[black]</p>
                </div>
                <div className="contactButton">
                    <EmailButtonFooter />
                </div>
            </div>
        </>
    )
}