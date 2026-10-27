"use client";

import { useEffect } from "react";

// Añade la clase "is-visible" a los elementos .reveal cuando entran en pantalla.
export default function Reveal() {
  useEffect(() => {
    const elementos = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elementos.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    elementos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
