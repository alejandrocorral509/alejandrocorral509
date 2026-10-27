"use client";

import { useState } from "react";

type Estado = "idle" | "enviando" | "ok" | "error";

export default function ContactForm() {
  const [estado, setEstado] = useState<Estado>("idle");
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState<Record<string, string>>({});

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = Object.fromEntries(new FormData(form));
    setEstado("enviando");
    setErrores({});
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrores(data.errores ?? {});
        throw new Error(data.error ?? "Error inesperado");
      }
      setEstado("ok");
      setMensaje(data.mensaje);
      form.reset();
    } catch (err) {
      setEstado("error");
      setMensaje(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
    }
  }

  if (estado === "ok") {
    return (
      <div className="card form__ok" role="status">
        <span className="form__ok-icon">✓</span>
        <p>{mensaje}</p>
        <button className="btn btn--ghost" onClick={() => setEstado("idle")}>Enviar otro mensaje</button>
      </div>
    );
  }

  return (
    <form className="card form" onSubmit={enviar} noValidate>
      <div className="form__row">
        <label>
          Nombre
          <input name="nombre" autoComplete="name" required aria-invalid={!!errores.nombre} />
          {errores.nombre && <span className="form__field-error">{errores.nombre}</span>}
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required aria-invalid={!!errores.email} />
          {errores.email && <span className="form__field-error">{errores.email}</span>}
        </label>
      </div>
      <label>
        Empresa <span className="form__optional">(opcional)</span>
        <input name="empresa" autoComplete="organization" />
      </label>
      <label>
        ¿Qué te gustaría mejorar con IA?
        <textarea name="mensaje" rows={4} required aria-invalid={!!errores.mensaje} />
        {errores.mensaje && <span className="form__field-error">{errores.mensaje}</span>}
      </label>
      {/* Campo trampa para bots */}
      <input name="web" className="form__hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {estado === "error" && <p className="form__error" role="alert">{mensaje}</p>}

      <button className="btn btn--block" type="submit" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
