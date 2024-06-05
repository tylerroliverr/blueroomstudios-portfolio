"use client";
import About from "./About";
import EmailButton from "./EmailButton";
import EmailButtonFooter from "./EmailButtonFooter";
import Services from "./Services";
import { useState } from "react";

export default function Menu() {

   const [isAboutOpen, setAboutOpen] = useState(false);
   const [isServicesOpen, setServicesOpen] = useState(false);

   const handleAboutToggle = () => {
      if (isAboutOpen) {
         setAboutOpen(false);
      } else {
         setAboutOpen(true);
      }
   }

   const handleServicesToggle = () => {
      if (isServicesOpen) {
         setServicesOpen(false);
      } else {
         setServicesOpen(true);
      }
   }

    return (
        <>
            <div className="menuOpen">
                <p className="menuItem about"
                  onClick={handleAboutToggle}>
                     [about]</p>
                <p className="menuItem services"
                  onClick={handleServicesToggle}>
                     [services]</p>
                <EmailButton />
            </div>
            {isAboutOpen ? ( <About /> ) : ( null )}
            {isServicesOpen ? ( <Services /> ) : ( null )}
            <div className="menuFooter">
                <div className="themeButtons">
                    <p className="themeItem">[blue]</p>
                    <p className="themeItem menuInactive">[red]</p>
                    <p className="themeItem menuInactive">[black]</p>
                </div>
                <div className="contactButton">
                    <EmailButtonFooter />
                </div>
            </div>
        </>
    )
}