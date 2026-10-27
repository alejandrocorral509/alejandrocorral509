import { NextResponse } from "next/server";
import { calcularResultado, esRespuestaValida, preguntas } from "@/lib/diagnostico";

// GET /api/diagnostico → devuelve las preguntas del test.
export function GET() {
  return NextResponse.json({ preguntas });
}

// POST /api/diagnostico → recibe { respuestas: { [id]: valor } } y devuelve el resultado.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "El cuerpo de la petición no es JSON válido." }, { status: 400 });
  }

  const respuestas = (body as { respuestas?: unknown })?.respuestas;
  if (!esRespuestaValida(respuestas)) {
    return NextResponse.json({ error: "Responde a todas las preguntas." }, { status: 400 });
  }

  return NextResponse.json(calcularResultado(respuestas));
}
