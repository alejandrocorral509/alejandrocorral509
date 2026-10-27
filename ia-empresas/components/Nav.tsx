"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const [abierto, setAbierto] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scroll ? "nav--scroll" : ""}`}>
      <div className="container nav__inner">
        <a href="#" className="logo" aria-label="Inicio">
          <span className="logo__mark">◆</span> IA<span className="logo__accent">Empresa</span>
        </a>

        <button
          className="nav__toggle"
          aria-expanded={abierto}
          aria-controls="menu"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto(!abierto)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="menu" className={`nav__links ${abierto ? "is-open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setAbierto(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn--small" onClick={() => setAbierto(false)}>
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  );
}
