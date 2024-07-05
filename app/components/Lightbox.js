'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';

const Lightbox = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesRef = useRef([]);
  const lightboxRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);

  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index);
    setIsActive(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsActive(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesRef.current.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagesRef.current.length) % imagesRef.current.length);
  }, []);

  const handleTouchStart = (e) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  useEffect(() => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
    lightboxRef.current = lightbox;

    const imagesNodeList = document.querySelectorAll('img');
    imagesRef.current = Array.from(imagesNodeList);

    imagesRef.current.forEach((image, index) => {
      image.addEventListener('click', () => openLightbox(index));
    });

    const handleKeyDown = (e) => {
      if (!isActive) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.removeChild(lightbox);
      imagesRef.current.forEach((image, index) => {
        image.removeEventListener('click', () => openLightbox(index));
      });
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openLightbox, closeLightbox, nextImage, prevImage, isActive]);

  useEffect(() => {
    if (!lightboxRef.current) return;

    if (isActive) {
      const totalImages = imagesRef.current.length;
      const currentNumber = currentImageIndex + 1; // Adding 1 because array index starts at 0
  
      lightboxRef.current.classList.add('active');
      lightboxRef.current.innerHTML = `
        <div class="lightbox-content">
          <img src="${imagesRef.current[currentImageIndex]?.src}" alt="Lightbox image" class="lightbox-img"/>
          <button class="prev-button">←</button>
          <button class="next-button">→</button>
          <button class="close-button"></button>
          <div class="image-counter">[${currentNumber}/${totalImages}]</div>
        </div>
      `;

      const content = lightboxRef.current.querySelector('.lightbox-content');
      content.addEventListener('touchstart', handleTouchStart);
      content.addEventListener('touchmove', handleTouchMove);
      content.addEventListener('touchend', handleTouchEnd);

      const prevButton = lightboxRef.current.querySelector('.prev-button');
      const nextButton = lightboxRef.current.querySelector('.next-button');
      const closeButton = lightboxRef.current.querySelector('.close-button');

      prevButton.addEventListener('click', prevImage);
      nextButton.addEventListener('click', nextImage);
      closeButton.addEventListener('click', closeLightbox);

      lightboxRef.current.addEventListener('click', (e) => {
        if (e.target === lightboxRef.current) closeLightbox();
      });

    } else {
      lightboxRef.current.classList.remove('active');
    }

    return () => {
      if (lightboxRef.current) {
        const content = lightboxRef.current.querySelector('.lightbox-content');
        if (content) {
          content.removeEventListener('touchstart', handleTouchStart);
          content.removeEventListener('touchmove', handleTouchMove);
          content.removeEventListener('touchend', handleTouchEnd);
        }
      }
    };
  }, [isActive, currentImageIndex, prevImage, nextImage, closeLightbox]);

  return null;
};

export default Lightbox;