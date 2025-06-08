'use client';
import { useState, useEffect } from 'react';
import style from '../styles/projectNav.module.css';

export default function ProjectImageCycle({ images, altText }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        setImageIndex((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade-in
      }, 600); // Match transition duration
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <img
      className={`${style.listImage} ${style.fadeImage} ${fade ? style.fadeIn : style.fadeOut}`}
      alt={altText}
      src={images[imageIndex]?.imagePath}
    />
  );
}
