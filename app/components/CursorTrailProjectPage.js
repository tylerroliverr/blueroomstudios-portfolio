"use client";
import { useEffect, useRef } from "react";

const TEXTS = [
  "ツ", "*ೃ༄", "⋇⊶⊰ ⊱⊷⋇", ".⋅ ۵♡۵ ⋅.", "⋆.ೃ࿔*:･", ".·:*¨༺ ༻¨*:·.",
  ".·:*¨¨* ≈☆≈ *¨¨*:·.", "*(*❦ω❦)*", "-ˋˏ ༻❁༺ ˎˊ-", "⍣ ೋ", "•°. *࿐",
  "❦", "⋇⋆✦⋆⋇", "₊˚ʚ ᗢ₊˚✧ ﾟ.", "❝ ❞ ✧ ೃ༄", "｡ₓ ू ₒ ु ˚",
  "-‘๑’-", "*:..｡o○", "*:..｡o○ ʚ ɞ", "✧○ꊞ○ꊞ○ꊞ○ꊞ○✧"
];

export default function CursorTrail() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const isTouchDevice = "ontouchstart" in window;

    const MAX_ITEMS = isTouchDevice ? 300 : 700;
    let MAX_ACTIVE = isTouchDevice ? 50 : 70;
    const LIFETIME = isTouchDevice ? 22000 : 20200;

    if (isSafari) {
      MAX_ACTIVE = isTouchDevice ? 50 : 60;
    }

    // restore desktop delay
    const SPAWN_DELAY = 0;
    let lastSpawnTime = 4000;

    let textIndex = 0;

    const pool = [];
    const active = [];

    let lastX = null;
    let lastY = null;

    const MIN_DISTANCE = isTouchDevice ? 16 : 6;

    // Create reusable elements
    for (let i = 0; i < MAX_ITEMS; i++) {
      const el = document.createElement("p");
      el.className = "trail-item-project-page";
      container.appendChild(el);
      pool.push(el);
    }

    const spawn = (x, y, spread = 12) => {
      if (pool.length === 0) return;

      // 👇 active cap (performance)
      if (active.length > MAX_ACTIVE) {
        const old = active.shift();
        old.el.style.opacity = "0";
        pool.push(old.el);
      }

      const el = pool.pop();

      el.textContent = TEXTS[textIndex];
      textIndex = (textIndex + 1) % TEXTS.length;

      const offsetX = (Math.random() - 0.5) * spread;
      const offsetY = (Math.random() - 0.5) * spread;
      const rotation = (Math.random() - 0.5) * 20;

      const velocity = isTouchDevice
        ? Math.random() * 60
        : Math.random() * 30;

      const item = {
        el,
        x: x + offsetX,
        y: y + offsetY,
        rotation,
        vx: (Math.random() - 0.5) * velocity,
        vy: (Math.random() - 0.5) * velocity,
        createdAt: performance.now(),
      };

      el.style.opacity = "1";
      el.style.transform = `
        translate3d(${item.x}px, ${item.y}px, 0)
        rotate(${rotation}deg)
        scale(${isTouchDevice ? 1.2 : 1})
      `;

      active.push(item);
    };

    // Desktop (distance + delay)
    const handleMove = (e) => {
      if (isTouchDevice) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const now = performance.now();

      if (lastX === null || lastY === null) {
        lastX = x;
        lastY = y;
        return;
      }

      const dx = x - lastX;
      const dy = y - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // require BOTH movement + time delay
      if (distance > MIN_DISTANCE && now - lastSpawnTime > SPAWN_DELAY) {
        const steps = Math.min(6, Math.floor(distance / MIN_DISTANCE));

        for (let i = 0; i < steps; i++) {
          const t = i / steps;
          const ix = lastX + dx * t;
          const iy = lastY + dy * t;
          spawn(ix, iy);
        }

        lastSpawnTime = now;
        lastX = x;
        lastY = y;
      }
    };

    // Touch move (distance only)
    const handleTouchMove = (e) => {
      if (!isTouchDevice) return;

      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];

      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      if (lastX === null || lastY === null) {
        lastX = x;
        lastY = y;
        return;
      }

      const dx = x - lastX;
      const dy = y - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > MIN_DISTANCE) {
        const steps = Math.min(12, Math.floor(distance / MIN_DISTANCE));

        for (let i = 0; i < steps; i++) {
          const t = i / steps;
          const ix = lastX + dx * t;
          const iy = lastY + dy * t;
          spawn(ix, iy, 50);
        }

        lastX = x;
        lastY = y;
      }
    };

    // Tap burst (reduced)
    const handleTap = (e) => {
      if (!isTouchDevice) return;

      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];

      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      for (let i = 0; i < 12; i++) {
        spawn(x, y, 80);
      }
    };

    // Touch end
    const handleTouchEnd = (e) => {
      if (!isTouchDevice) return;

      lastX = null;
      lastY = null;

      const rect = container.getBoundingClientRect();
      const touch = e.changedTouches[0];

      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      for (let i = 0; i < 12; i++) {
        spawn(x, y, 100);
      }
    };

    // Clear (desktop only)
    const handleClear = () => {
      for (let i = 0; i < active.length; i++) {
        const item = active[i];
        item.el.style.opacity = "0";
        pool.push(item.el);
      }
      active.length = 0;
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("touchstart", handleTap);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    if (!isTouchDevice) {
      container.addEventListener("click", handleClear);
    }

    let rafId;

    const animate = () => {
      const now = performance.now();

      for (let i = active.length - 1; i >= 0; i--) {
        const item = active[i];
        const age = now - item.createdAt;
        const progress = age / LIFETIME;

        if (progress >= 1) {
          item.el.style.opacity = "0";
          pool.push(item.el);
          active.splice(i, 1);
          continue;
        }

        item.x += item.vx * 0.02;
        item.y += item.vy * 0.02;

        const friction = isTouchDevice ? 0.97 : 0.95;
        item.vx *= friction;
        item.vy *= friction;

        item.y -= 0.1;

        item.el.style.transform = `
          translate(${item.x}px, ${item.y}px)
          rotate(${item.rotation}deg)
        `;

        isTouchDevice ? item.el.style.opacity = 0.5 - progress : item.el.style.opacity = 1 - progress;
        item.el.style.filter = `blur(${progress * 1.2}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("touchstart", handleTap);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);

      if (!isTouchDevice) {
        container.removeEventListener("click", handleClear);
      }
    };
  }, []);

  return <div ref={containerRef} className="cursor-trail-container-project-page" />;
}