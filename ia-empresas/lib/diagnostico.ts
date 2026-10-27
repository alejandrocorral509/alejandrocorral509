// Preguntas y lógica de puntuación del diagnóstico de madurez en IA.
// Se usa tanto en el cliente (para pintar el formulario) como en la API
// (para calcular el resultado en el servidor).

export type Pregunta = {
  id: string;
  texto: string;
  opciones: { valor: number; texto: string }[];
};

export const preguntas: Pregunta[] = [
  {
    id: "uso",
    texto: "¿Tu equipo usa hoy herramientas de IA en su trabajo?",
    opciones: [
      { valor: 0, texto: "No, nadie" },
      { valor: 1, texto: "Algunas personas, por su cuenta" },
      { valor: 2, texto: "Sí, con herramientas aprobadas" },
      { valor: 3, texto: "Sí, integradas en nuestros procesos" },
    ],
  },
  {
    id: "datos",
    texto: "¿Cómo están organizados los datos de la empresa?",
    opciones: [
      { valor: 0, texto: "Dispersos en hojas y correos" },
      { valor: 1, texto: "En varios sistemas sin conectar" },
      { valor: 2, texto: "Centralizados en su mayoría" },
      { valor: 3, texto: "Centralizados, limpios y accesibles" },
    ],
  },
  {
    id: "estrategia",
    texto: "¿Existe una estrategia o responsable de IA?",
    opciones: [
      { valor: 0, texto: "No" },
      { valor: 1, texto: "Se ha hablado, pero nada formal" },
      { valor: 2, texto: "Hay un responsable o equipo" },
      { valor: 3, texto: "Sí, con objetivos y presupuesto" },
    ],
  },
  {
    id: "formacion",
    texto: "¿Tu plantilla ha recibido formación en IA?",
    opciones: [
      { valor: 0, texto: "Ninguna" },
      { valor: 1, texto: "Algún curso puntual" },
      { valor: 2, texto: "Formación para algunos equipos" },
      { valor: 3, texto: "Plan de formación para todos" },
    ],
  },
  {
    id: "gobernanza",
    texto: "¿Tenéis normas sobre el uso de IA y protección de datos?",
    opciones: [
      { valor: 0, texto: "No" },
      { valor: 1, texto: "Recomendaciones informales" },
      { valor: 2, texto: "Una política escrita" },
      { valor: 3, texto: "Política, revisiones y cumplimiento del AI Act" },
    ],
  },
];

export type Resultado = {
  puntuacion: number; // 0–100
  nivel: string;
  descripcion: string;
  recomendaciones: string[];
};

const recomendacionesPorPregunta: Record<string, string> = {
  uso: "Elige 2 o 3 herramientas de IA aprobadas y lanza un piloto con un equipo motivado.",
  datos: "Centraliza y limpia los datos clave: sin buenos datos no hay buena IA.",
  estrategia: "Nombra a una persona responsable de IA y fija 2 o 3 objetivos medibles para este año.",
  formacion: "Organiza una formación práctica para toda la plantilla: casos reales, no teoría.",
  gobernanza: "Redacta una política de uso de IA que cubra datos confidenciales, RGPD y el AI Act.",
};

export function esRespuestaValida(respuestas: unknown): respuestas is Record<string, number> {
  if (!respuestas || typeof respuestas !== "object" || Array.isArray(respuestas)) return false;
  const r = respuestas as Record<string, unknown>;
  return preguntas.every((p) => {
    const v = r[p.id];
    return typeof v === "number" && p.opciones.some((o) => o.valor === v);
  });
}

export function calcularResultado(respuestas: Record<string, number>): Resultado {
  const max = preguntas.length * 3;
  const total = preguntas.reduce((acc, p) => acc + respuestas[p.id], 0);
  const puntuacion = Math.round((total / max) * 100);

  // Recomendaciones para las áreas más débiles (las 3 con menor puntuación).
  const recomendaciones = [...preguntas]
    .sort((a, b) => respuestas[a.id] - respuestas[b.id])
    .filter((p) => respuestas[p.id] < 3)
    .slice(0, 3)
    .map((p) => recomendacionesPorPregunta[p.id]);

  if (recomendaciones.length === 0) {
    recomendaciones.push(
      "Explora agentes de IA que automaticen procesos completos.",
      "Comparte vuestra experiencia: sois un referente para otras empresas del sector."
    );
  }

  let nivel: string;
  let descripcion: string;
  if (puntuacion < 25) {
    nivel = "Explorador";
    descripcion = "Estáis al principio del camino. Es el mejor momento para empezar con pasos pequeños y seguros.";
  } else if (puntuacion < 50) {
    nivel = "Experimentador";
    descripcion = "Ya hay interés y algunas pruebas. Toca ordenar: estrategia, datos y un primer piloto medido.";
  } else if (puntuacion < 80) {
    nivel = "Implementador";
    descripcion = "Tenéis bases sólidas. El siguiente paso es escalar lo que funciona a toda la empresa.";
  } else {
    nivel = "Líder en IA";
    descripcion = "La IA ya forma parte de vuestra forma de trabajar. Ahora toca innovar y automatizar procesos completos.";
  }

  return { puntuacion, nivel, descripcion, recomendaciones };
}
