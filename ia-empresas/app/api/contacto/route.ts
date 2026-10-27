import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// POST /api/contacto → guarda una solicitud de contacto.
// En local se guarda en data/leads.json. En producción conviene sustituirlo
// por una base de datos o un servicio de email (el disco de plataformas como
// Vercel no es persistente).

const DATA_FILE = path.join(process.cwd(), "data", "leads.json");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Límite sencillo en memoria: 5 envíos por IP cada 10 minutos.
const VENTANA_MS = 10 * 60 * 1000;
const MAX_ENVIOS = 5;
const envios = new Map<string, number[]>();

function limitado(ip: string): boolean {
  const ahora = Date.now();
  const recientes = (envios.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS);
  recientes.push(ahora);
  envios.set(ip, recientes);
  return recientes.length > MAX_ENVIOS;
}

function texto(valor: unknown, max: number): string {
  return typeof valor === "string" ? valor.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (limitado(ip)) {
    return NextResponse.json({ error: "Demasiados envíos. Inténtalo más tarde." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "El cuerpo de la petición no es JSON válido." }, { status: 400 });
  }

  // Campo trampa para bots: los humanos no lo ven, así que debe llegar vacío.
  if (texto(body.web, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    nombre: texto(body.nombre, 100),
    email: texto(body.email, 200).toLowerCase(),
    empresa: texto(body.empresa, 150),
    mensaje: texto(body.mensaje, 2000),
    fecha: new Date().toISOString(),
  };

  const errores: Record<string, string> = {};
  if (lead.nombre.length < 2) errores.nombre = "Escribe tu nombre.";
  if (!EMAIL_RE.test(lead.email)) errores.email = "Escribe un email válido.";
  if (lead.mensaje.length < 10) errores.mensaje = "Cuéntanos algo más (mínimo 10 caracteres).";
  if (Object.keys(errores).length > 0) {
    return NextResponse.json({ error: "Revisa los campos marcados.", errores }, { status: 400 });
  }

  try {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    let leads: unknown[] = [];
    try {
      leads = JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
    } catch {
      // El archivo aún no existe: empezamos con una lista vacía.
    }
    leads.push(lead);
    await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2));
  } catch (err) {
    console.error("No se pudo guardar el contacto:", err);
    return NextResponse.json({ error: "No se pudo guardar tu mensaje. Inténtalo de nuevo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, mensaje: `¡Gracias, ${lead.nombre}! Te responderemos pronto.` });
}
