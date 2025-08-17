'use client';
import Image from 'next/image';
import style from '../styles/services.module.css';
import Link from 'next/link';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from "../components/ThemeProvider";

export default function Services() {

  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useContext(ThemeContext);

  // Map of theme → normal/hover image paths
  const images = {
    blue: {
      normal: "/handstarsblue.png",
      hover: "/feetblue.png",
    },
    red: {
      normal: "/handstarsred.png",
      hover: "/feetred.png",
    },
    black: {
      normal: "/handstarsblack.png",
      hover: "/feetdark.png",
    },
  };

  const currentImages = images[theme] || images.blue; // fallback to blue

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsHovered((prev) => !prev); // toggle on tap
    }
  };

  return (
    <>
      <div className={style.servicesContainer}>
        <div className={style.servicesHeaderInfo}>
          <p className={style.serviceDescription}>I offer free consultations so I can get to know you and your project better. Feel free to email me {'<3'}</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>Custom code templates</p>
          <p className={style.serviceDescription}>{`Complete freedom and control. Adjust styles, fonts, and layouts to echo your brand's personality. Your vision, your website, your way. No monthly website builder fees either.`}</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>Web design & interactivity</p>
          <p className={style.serviceDescription}>Basic website using any website builder. Fine tune and elevate user experience through animations, interactivity and good design.</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>E-commerce website</p>
          <p className={style.serviceDescription}>Interactivity, animations, and good design. We build an e-com website using one of the major online platforms. Get your products out there! Have a cool store.</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>Website renewal</p>
          <p className={style.serviceDescription}>Full facelift of your current website. Liven the design, add some interactivity and better user experience.</p>
        </div>
        <div className={style.serviceItem}>
          <p className={style.serviceTitle}>Mobile responsive design</p>
          <p className={style.serviceDescription}>{`Already have a site that needs to look good on a mobile too? Let's make it better... Together.`}</p>
        </div>
      </div>

      <div className={style.contactDiv}>
        <div>
          <p className={style.serviceTitle}>Instagram</p>
          <Link target="_blank" className="link" href={"https://www.instagram.com/blueroom.studios/"}><p className={style.linkTitle}>@blueroom.studios</p></Link>
        </div>
        <div>
          <p className={style.serviceTitle}>Email</p>
          <p className={style.linkTitle}>help@blueroomstudios.com.au</p>
        </div>
      </div>

      <div
        className={style.photoDiv}
        onMouseEnter={!isMobile ? () => setIsHovered(true) : undefined}
        onMouseLeave={!isMobile ? () => setIsHovered(false) : undefined}
        onClick={handleClick}
      >
        <Image
          className={style.photo}
          src={isHovered ? currentImages.hover : currentImages.normal}
          alt="Themed Hand Stars"
          height={3000}
          width={3000}
        />
      </div>
    </>
  )
}