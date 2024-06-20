"use client";
import React, { useEffect, useRef } from 'react';
import style from "../styles/menu.module.css";

const EmailButtonFooter = () => {
   const buttonRef = useRef(null);

   useEffect(() => {
      const button = buttonRef.current;

      const copyToClipboard = async () => {
         const text = "help@blueroomstudios.com.au"; // Replace this with the text you want to copy

         try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
               await navigator.clipboard.writeText(text);
               alert('Email: help@blueroomstudios.com.au - Copied to clipboard!');
            } else {
               const textArea = document.createElement('textarea');
               textArea.value = text;
               document.body.appendChild(textArea);
               textArea.select();
               document.execCommand('copy');
               document.body.removeChild(textArea);
               alert('Copied email to clipboard!');
            }
         } catch (err) {
            console.error('Failed to copy: ', err);
         }
      };

      button.addEventListener('click', copyToClipboard);

      return () => {
         button.removeEventListener('click', copyToClipboard);
      };
   }, []);

   return (
      <div ref={buttonRef} className={`email link ${style.menuItem}`}>
         <p>[help@blueroomstudios.com.au]</p>
      </div>
   );
};

export default EmailButtonFooter;
