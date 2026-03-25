"use client";
import { useEffect, useRef } from "react";

export default function HorizontalScrollContainer({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    const addListener = () => {
      el.addEventListener("wheel", onWheel, { passive: false });
    };

    const removeListener = () => {
      el.removeEventListener("wheel", onWheel);
    };

    // Initial check
    if (!mediaQuery.matches) {
      addListener();
    }

    // Listen for resize changes
    const handleChange = (e) => {
      if (e.matches) {
        removeListener(); // <= 768px
      } else {
        addListener(); // > 768px
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      removeListener();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}