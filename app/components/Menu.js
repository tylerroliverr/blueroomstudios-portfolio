"use client";
import About from "./About";
import EmailButton from "./EmailButton";
import EmailButtonFooter from "./EmailButtonFooter";
import Services from "./Services";
import { useState, useEffect } from "react";
import style from "../styles/menu.module.css";
import CursorHoverLink from "./CursorLinkHover";
import Acknowledge from "./Acknowledge";

export default function Menu() {

   const [isAboutOpen, setAboutOpen] = useState(false);
   const [isServicesOpen, setServicesOpen] = useState(false);
   const [isAcknowledgeOpen, setAcknowledgeOpen] = useState(false);

   // useEffect(() => {
   //    handleMenuInactivity();
   // }, [isAboutOpen, isServicesOpen]);

   // const handleMenuInactivity = () => {
   //    const aboutButton = document.querySelector(".about");
   //    const servicesButton = document.querySelector(".services");

   //    if (isServicesOpen) {
   //       aboutButton.classList.add(`${style.menuInactive}`);
   //    } else {
   //       aboutButton.classList.remove(`${style.menuInactive}`);
   //    }

   //    if (isAboutOpen) {
   //       servicesButton.classList.add(`${style.menuInactive}`);
   //    } else {
   //       servicesButton.classList.remove(`${style.menuInactive}`);
   //    }
   // }

   const handleAboutToggle = () => {
      setAboutOpen(!isAboutOpen);
      setServicesOpen(false);
      setAcknowledgeOpen(false);
   }

   const handleServicesToggle = () => {
      setServicesOpen(!isServicesOpen);
      setAboutOpen(false);
      setAcknowledgeOpen(false);
   }

   const handleAcknowledgementToggle = () => {
      setAcknowledgeOpen(!isAcknowledgeOpen);
      setAboutOpen(false);
      setServicesOpen(false);
   }
   
   return (
      <>
      <CursorHoverLink />
         <div className={style.menuContainer}>
            <div className={style.menuOpen}>
               <p className={`${style.menuItem} about link`} //about class for menu interactions function
                  onClick={handleAboutToggle}>
                  [About]</p>
               <p className={`${style.menuItem} services link`} //services class for menu interactions function
                  onClick={handleServicesToggle}>
                  [Services]</p>
               <EmailButton text="[Contact]"/>
               <p className={`${style.menuItem} acknowledgement link`}
                  onClick={handleAcknowledgementToggle}>
                  [Acknowledgement]</p>
            </div>
            {isAboutOpen ? (<About />) : (null)}
            {isServicesOpen ? (<Services />) : (null)}
            {isAcknowledgeOpen ? (<Acknowledge />) : (null)}
         </div>
         <div className={style.menuFooter}>
            <div className={style.themeButtons}>
               <p className={`${style.themeItem} link`}>[Blue]</p>
               <p className={`${style.themeItem} ${style.menuInactive} link`}>[Red]</p>
               <p className={`${style.themeItem} ${style.menuInactive} link`}>[Black]</p>
            </div>
            <div className={style.contactButton}>
               <EmailButtonFooter />
            </div>
         </div>
      </>
   )
}