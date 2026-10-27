"use client";

import { useState } from "react";
import { areas } from "@/lib/content";

export default function AreasTabs() {
  const [activa, setActiva] = useState(areas[0].id);
  const area = areas.find((a) => a.id === activa) ?? areas[0];

  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist" aria-label="Áreas de la empresa">
        {areas.map((a) => (
          <button
            key={a.id}
            role="tab"
            id={`tab-${a.id}`}
            aria-selected={a.id === activa}
            aria-controls={`panel-${a.id}`}
            className={`tabs__tab ${a.id === activa ? "is-active" : ""}`}
            onClick={() => setActiva(a.id)}
          >
            {a.label}
          </button>
        ))}
      </div>

      <div
        className="tabs__panel card"
        role="tabpanel"
        id={`panel-${area.id}`}
        aria-labelledby={`tab-${area.id}`}
        key={area.id}
      >
        <h3>IA en {area.label}</h3>
        <ul className="checklist">
          {area.casos.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="tabs__impacto">
          <strong>Impacto:</strong> {area.impacto}
        </p>
      </div>
    </div>
  );
}
