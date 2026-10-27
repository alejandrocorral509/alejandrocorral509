# IA para empresas · Landing page

Landing page sobre cómo usar la inteligencia artificial y cómo deben implantarla las empresas.

- **Frontend:** React 19 (componentes en `components/`)
- **Backend:** Next.js 16 (App Router + rutas API en `app/api/`)

## Arrancar en local

```bash
npm install
npm run dev        # http://localhost:3000
```

Producción: `npm run build && npm start`.

## Secciones

1. Hero
2. Cómo utilizar la IA en el día a día + 5 buenas prácticas
3. Hoja de ruta de implantación en 5 fases
4. Casos de uso por departamento (pestañas interactivas)
5. Riesgos e IA responsable (RGPD, AI Act…)
6. Tendencias de futuro
7. Diagnóstico de madurez en IA (usa la API)
8. Preguntas frecuentes
9. Formulario de contacto (usa la API)

## API

| Método | Ruta | Qué hace |
| --- | --- | --- |
| `GET` | `/api/diagnostico` | Devuelve las preguntas del test |
| `POST` | `/api/diagnostico` | Recibe `{ respuestas }` y devuelve puntuación, nivel y recomendaciones |
| `POST` | `/api/contacto` | Valida y guarda `{ nombre, email, empresa, mensaje }` |

Los contactos se guardan en `data/leads.json` (ignorado por git). En plataformas sin disco
persistente, como Vercel, sustitúyelo por una base de datos o un servicio de email.

## Editar textos

Todo el contenido está en `lib/content.ts` y las preguntas del test en `lib/diagnostico.ts`.
