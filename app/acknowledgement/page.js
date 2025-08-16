'use client';
import Image from 'next/image';
import style from '../styles/services.module.css';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { ThemeContext } from "../components/ThemeProvider";

export default function Acknowledgement() {

  const { theme } = useContext(ThemeContext);

  // Map of theme → normal/hover image paths
  const images = {
    blue: {
      normal: "/bluerock.png"
    },
    red: {
      normal: "/rockred.png"
    },
    black: {
      normal: "/blackrock.png"
    },
  };

  const currentImages = images[theme] || images.blue; // fallback to blue

  return (
    <>
      <div className={`${style.servicesContainer} ${style.ackContainer}`}>
        <div className={style.servicesHeaderInfo}>
          <p className={style.serviceDescription}>Blueroom wishes to acknowledge the traditional owners of the land on which we operate on, the Wurundjeri people of the Kulin Nation, and pay my respects to their Elders past, present and emerging.</p>
          <br></br>
          <p className={style.serviceDescription}>No more violence.</p>
        </div>
      </div>

      <div className={style.photoDiv}>
        <Image
          className={style.photo}
          src={currentImages.normal}
          alt="Themed Uluru"
          height={3000}
          width={3000}
        />
      </div>
    </>
  )
}