'use client';

import { useRef, useEffect, useState } from 'react';
import style from "../styles/projectDetailsUpdated.module.css";

export default function ProjectGallery({ images }) {
  const galleryRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const gallery = galleryRef.current;
    const slides = gallery.querySelectorAll('.gallerySlide');
    const gap = parseInt(getComputedStyle(gallery).gap || 0);

    const updateSlide = () => {
      const scrollLeft = gallery.scrollLeft;
      const slideWidth = slides[0].offsetWidth + gap;
      const index = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(index + 1);
    };

    gallery.addEventListener('scroll', updateSlide);
    updateSlide();

    return () => {
      gallery.removeEventListener('scroll', updateSlide);
    };
  }, []);

  return (
    <div className={style.projectGallery}>
      <div className={style.galleryWrapper} ref={galleryRef}>
        {project.images.map((image, index) => (
          <div className={style.gallerySlide} key={index}>
            <img
              src={image.imagePath}
              alt="Project Image"
              className={style.projectImage}
            />
          </div>
        ))}
      </div>
      <div className={style.slideCounter}>
        {currentSlide} / {project.images.length}
      </div>
    </div>

  );
}
