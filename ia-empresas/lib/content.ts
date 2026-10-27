// Contenido estático de la landing. Se mantiene aquí para poder editar los
// textos sin tocar los componentes.

export const navLinks = [
  { href: "#usar", label: "Cómo usarla" },
  { href: "#hoja-de-ruta", label: "Hoja de ruta" },
  { href: "#areas", label: "Por áreas" },
  { href: "#futuro", label: "Futuro" },
  { href: "#diagnostico", label: "Diagnóstico" },
];

export const heroPoints = [
  "Guía práctica, sin humo",
  "Pensada para pymes y grandes empresas",
  "Diagnóstico gratuito en 2 minutos",
];

export const usos = [
  {
    icon: "✍️",
    title: "Redactar y resumir",
    text: "Borradores de correos, informes y propuestas. Resúmenes de reuniones y documentos largos en segundos.",
  },
  {
    icon: "📊",
    title: "Analizar datos",
    text: "Pregunta a tus hojas de cálculo en lenguaje natural, detecta tendencias y genera gráficos sin saber programar.",
  },
  {
    icon: "💬",
    title: "Atender clientes",
    text: "Asistentes que responden dudas frecuentes 24/7 y pasan a una persona los casos complejos.",
  },
  {
    icon: "⚙️",
    title: "Automatizar procesos",
    text: "Clasificar correos, extraer datos de facturas o rellenar formularios: tareas repetitivas que la IA hace mejor.",
  },
  {
    icon: "💻",
    title: "Programar más rápido",
    text: "Asistentes de código que escriben, revisan y documentan software junto a tu equipo técnico.",
  },
  {
    icon: "🤖",
    title: "Agentes autónomos",
    text: "Sistemas que encadenan varios pasos: investigan, deciden y ejecutan tareas completas con supervisión humana.",
  },
];

export const buenasPracticas = [
  {
    title: "Da contexto",
    text: "Explica quién eres, qué necesitas y para quién. Cuanto más contexto, mejor respuesta.",
  },
  {
    title: "Pide un formato",
    text: "Tabla, lista, correo de 5 líneas… Decir cómo quieres el resultado ahorra iteraciones.",
  },
  {
    title: "Itera",
    text: "La primera respuesta es un borrador. Pide cambios concretos hasta llegar al resultado.",
  },
  {
    title: "Verifica siempre",
    text: "La IA puede equivocarse con seguridad. Revisa datos, cifras y fuentes antes de usarlos.",
  },
  {
    title: "Protege los datos",
    text: "No pegues información confidencial en herramientas que no estén aprobadas por tu empresa.",
  },
];

export const hojaDeRuta = [
  {
    fase: "01",
    title: "Diagnóstico",
    duracion: "2–4 semanas",
    text: "Analiza procesos, datos disponibles y nivel de madurez digital. Identifica dónde se pierde más tiempo.",
    entregable: "Mapa de oportunidades",
  },
  {
    fase: "02",
    title: "Priorizar casos de uso",
    duracion: "1–2 semanas",
    text: "Elige 2 o 3 casos con alto impacto y baja complejidad. Define cómo medirás el éxito antes de empezar.",
    entregable: "Matriz impacto / esfuerzo",
  },
  {
    fase: "03",
    title: "Datos y gobernanza",
    duracion: "En paralelo",
    text: "Ordena los datos, define quién puede usar qué herramientas y crea una política de uso responsable.",
    entregable: "Política de IA interna",
  },
  {
    fase: "04",
    title: "Piloto",
    duracion: "6–12 semanas",
    text: "Lanza un proyecto acotado con un equipo real. Mide resultados, recoge feedback y ajusta.",
    entregable: "Resultados medidos",
  },
  {
    fase: "05",
    title: "Escalar y formar",
    duracion: "Continuo",
    text: "Extiende lo que funciona al resto de la empresa y forma a todos los equipos. La IA es un cambio cultural, no solo técnico.",
    entregable: "Plan de adopción",
  },
];

export const areas = [
  {
    id: "marketing",
    label: "Marketing",
    casos: [
      "Generar variantes de anuncios y textos para pruebas A/B",
      "Segmentar clientes según su comportamiento",
      "Analizar opiniones y reseñas a gran escala",
      "Planificar calendarios de contenido",
    ],
    impacto: "Más campañas, más personalizadas, con el mismo equipo.",
  },
  {
    id: "ventas",
    label: "Ventas",
    casos: [
      "Priorizar oportunidades con más probabilidad de cierre",
      "Preparar reuniones con resúmenes del cliente",
      "Redactar propuestas personalizadas",
      "Actualizar el CRM automáticamente tras cada llamada",
    ],
    impacto: "Menos tiempo administrativo y más tiempo vendiendo.",
  },
  {
    id: "operaciones",
    label: "Operaciones",
    casos: [
      "Prever la demanda y optimizar el inventario",
      "Detectar anomalías en la producción",
      "Planificar rutas y turnos",
      "Extraer datos de albaranes y facturas",
    ],
    impacto: "Procesos más eficientes y menos errores manuales.",
  },
  {
    id: "rrhh",
    label: "RRHH",
    casos: [
      "Redactar ofertas de empleo claras e inclusivas",
      "Responder dudas internas sobre políticas y nóminas",
      "Diseñar planes de formación personalizados",
      "Agilizar el onboarding de nuevas personas",
    ],
    impacto: "Un equipo de personas centrado en las personas.",
  },
  {
    id: "finanzas",
    label: "Finanzas",
    casos: [
      "Conciliar cuentas y clasificar gastos",
      "Detectar posibles fraudes o pagos duplicados",
      "Generar previsiones de tesorería",
      "Explicar informes financieros en lenguaje sencillo",
    ],
    impacto: "Cierres más rápidos y decisiones con mejores datos.",
  },
  {
    id: "soporte",
    label: "Atención al cliente",
    casos: [
      "Chat y correo con respuestas instantáneas",
      "Clasificar y enrutar incidencias",
      "Sugerir respuestas a los agentes en tiempo real",
      "Detectar clientes en riesgo de abandono",
    ],
    impacto: "Respuestas más rápidas sin perder el trato humano.",
  },
];

export const riesgos = [
  {
    title: "Privacidad",
    text: "Cumple el RGPD: sabe dónde se procesan tus datos y usa versiones empresariales de las herramientas.",
  },
  {
    title: "Errores y alucinaciones",
    text: "La IA puede inventar datos. Mantén siempre a una persona revisando las decisiones importantes.",
  },
  {
    title: "Sesgos",
    text: "Los modelos aprenden de datos históricos. Audita los resultados en procesos sensibles como la selección de personal.",
  },
  {
    title: "Regulación",
    text: "El Reglamento Europeo de IA (AI Act) clasifica los sistemas por nivel de riesgo. Conoce tus obligaciones.",
  },
];

export const tendencias = [
  {
    title: "Agentes de IA",
    text: "Pasaremos de herramientas que responden a sistemas que actúan: gestionan tareas completas de principio a fin.",
  },
  {
    title: "Equipos humano + IA",
    text: "Cada profesional tendrá asistentes especializados. Ganarán las empresas que mejor combinen criterio humano y velocidad de la IA.",
  },
  {
    title: "IA multimodal",
    text: "Texto, voz, imagen y vídeo en un mismo sistema: inspecciones visuales, reuniones transcritas y análisis de documentos escaneados.",
  },
  {
    title: "IA a medida",
    text: "Modelos conectados a los datos propios de cada empresa, que conocen su catálogo, sus procesos y su forma de trabajar.",
  },
];

export const faqs = [
  {
    q: "¿Mi empresa es demasiado pequeña para usar IA?",
    a: "No. Muchas herramientas cuestan lo mismo que una suscripción de software y no requieren equipo técnico. Una pyme puede empezar en días con asistentes de escritura, atención al cliente o análisis de datos.",
  },
  {
    q: "¿La IA va a sustituir a mis empleados?",
    a: "Lo habitual es que automatice tareas, no puestos completos. Las empresas que mejor la usan liberan a su equipo de lo repetitivo para que se centre en tareas de más valor. Formar a la plantilla es clave.",
  },
  {
    q: "¿Por dónde empiezo?",
    a: "Por un problema concreto, no por la tecnología. Elige un proceso repetitivo que consuma muchas horas, prueba una solución en pequeño y mide el resultado antes de escalar.",
  },
  {
    q: "¿Cuánto cuesta implantar IA?",
    a: "Depende del enfoque. Usar herramientas existentes puede costar unas decenas de euros por usuario al mes. Un desarrollo a medida conectado a tus sistemas requiere más inversión, por eso conviene validarlo antes con un piloto.",
  },
  {
    q: "¿Qué pasa con la seguridad de mis datos?",
    a: "Usa planes empresariales que garanticen que tus datos no se usan para entrenar modelos, define qué información se puede compartir y revisa dónde se almacenan los datos.",
  },
];
