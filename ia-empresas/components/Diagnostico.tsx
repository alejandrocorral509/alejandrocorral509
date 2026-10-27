"use client";

import { useState } from "react";
import { preguntas, type Resultado } from "@/lib/diagnostico";

export default function Diagnostico() {
  const [respuestas, setRespuestas] = useState<Record<string, number>>({});
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const respondidas = Object.keys(respuestas).length;
  const completo = respondidas === preguntas.length;

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!completo) return;
    setCargando(true);
    setError("");
    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ respuestas }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Error inesperado");
      setResultado(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo calcular el resultado.");
    } finally {
      setCargando(false);
    }
  }

  function reiniciar() {
    setRespuestas({});
    setResultado(null);
  }

  if (resultado) {
    return (
      <div className="card resultado" aria-live="polite">
        <div className="resultado__score" style={{ "--score": resultado.puntuacion } as React.CSSProperties}>
          <span>{resultado.puntuacion}</span>
          <small>/100</small>
        </div>
        <div>
          <p className="eyebrow">Tu nivel</p>
          <h3>{resultado.nivel}</h3>
          <p>{resultado.descripcion}</p>
          <h4>Próximos pasos recomendados</h4>
          <ol className="pasos">
            {resultado.recomendaciones.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
          <div className="resultado__acciones">
            <a href="#contacto" className="btn">Quiero ayuda para implantarlo</a>
            <button className="btn btn--ghost" onClick={reiniciar}>Repetir test</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="card quiz" onSubmit={enviar}>
      <div className="quiz__progress" aria-hidden="true">
        <div style={{ width: `${(respondidas / preguntas.length) * 100}%` }} />
      </div>
      <p className="quiz__count">
        {respondidas} de {preguntas.length} respondidas
      </p>

      {preguntas.map((p, i) => (
        <fieldset key={p.id} className="quiz__q">
          <legend>
            <span className="quiz__num">{i + 1}</span> {p.texto}
          </legend>
          <div className="quiz__opciones">
            {p.opciones.map((o) => (
              <label key={o.valor} className={`opcion ${respuestas[p.id] === o.valor ? "is-checked" : ""}`}>
                <input
                  type="radio"
                  name={p.id}
                  value={o.valor}
                  checked={respuestas[p.id] === o.valor}
                  onChange={() => setRespuestas({ ...respuestas, [p.id]: o.valor })}
                />
                {o.texto}
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      {error && <p className="form__error" role="alert">{error}</p>}

      <button className="btn btn--block" type="submit" disabled={!completo || cargando}>
        {cargando ? "Calculando…" : completo ? "Ver mi resultado" : "Responde todas las preguntas"}
      </button>
    </form>
  );
}
