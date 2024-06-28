'use client';
import React, { useEffect } from 'react';

const Lightbox = () => {

  useEffect(() => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const images = document.querySelectorAll('img');

    images.forEach(image => {
      image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
          lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
      });
    });

    lightbox.addEventListener('click', e => {
      if (e.target !== e.currentTarget) return;
      lightbox.classList.remove('active');
    });

    return () => {
      // Clean up by removing the lightbox and event listeners when the component unmounts
      document.body.removeChild(lightbox);
      images.forEach(image => {
        image.removeEventListener('click', e => {
          lightbox.classList.add('active');
          const img = document.createElement('img');
          img.src = image.src;
          while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
          }
          lightbox.appendChild(img);
        });
      });
      lightbox.removeEventListener('click', e => {
        if (e.target !== e.currentTarget) return;
        lightbox.classList.remove('active');
      });
    };
  }, []); // Empty dependency array ensures this runs only once after initial render

  return null;
};

export default Lightbox;