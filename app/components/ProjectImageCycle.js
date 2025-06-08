'use client';
import { useState, useEffect } from 'react';
import style from '../styles/projectNav.module.css';

export default function ProjectImageCycle({ images, altText, delayOffset = 0 }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    let intervalId;
    const startCycle = () => {
      intervalId = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setImageIndex((prev) => (prev + 1) % images.length);
          setFade(true);
        }, 400); // match CSS transition
      }, 6000);
    };

    const delayTimer = setTimeout(startCycle, delayOffset);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(intervalId);
    };
  }, [images, delayOffset]);

  return (
    <img
      className={`${style.listImage} ${style.fadeImage} ${fade ? style.fadeIn : style.fadeOut}`}
      alt={altText}
      src={images[imageIndex]?.imagePath}
    />
  );
}
