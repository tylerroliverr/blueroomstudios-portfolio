'use client';
import { useState, useEffect } from 'react';
import style from '../styles/projectNav.module.css';

// Global timer state (shared across components)
let globalImageIndex = 0;
const listeners = new Set();

function startGlobalSlideshow() {
  if (startGlobalSlideshow.timer) return;

  startGlobalSlideshow.timer = setInterval(() => {
    globalImageIndex++;
    listeners.forEach((callback) => callback(globalImageIndex));
  }, 7000);
}

export default function ProjectImageCycle({ images, altText }) {
  const [imageIndex, setImageIndex] = useState(globalImageIndex % images.length);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const listener = (index) => {
      setImageIndex(index % images.length);
    };

    listeners.add(listener);
    startGlobalSlideshow();

    // Preload images
    images.forEach(({ imagePath }) => {
      const img = new Image();
      img.src = imagePath;
    });

    return () => {
      listeners.delete(listener);
    };
  }, [images]);

  return (
    <div className={style.slideshowContainer}>
      {images.map((image, idx) => (
        <img
          key={idx}
          className={`${style.listImage} ${idx === imageIndex ? style.active : ''}`}
          src={image.imagePath}
          alt={altText}
          loading="lazy"
        />
      ))}
    </div>
  );
}
