import Nav from "@/components/Nav";
import AreasTabs from "@/components/AreasTabs";
import Diagnostico from "@/components/Diagnostico";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  buenasPracticas,
  faqs,
  heroPoints,
  hojaDeRuta,
  riesgos,
  tendencias,
  usos,
} from "@/lib/content";

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section__header reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Reveal />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero__glow" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__text">
              <p className="pill">Guía 2026 · Inteligencia artificial para empresas</p>
              <h1>
                La IA no es el futuro de tu empresa.
                <span className="gradient-text"> Es su presente.</span>
              </h1>
              <p className="lead">
                Aprende a usar la inteligencia artificial en tu día a día y descubre, paso a paso, cómo implantarla en tu
                empresa de forma rentable, segura y responsable.
              </p>
              <div className="hero__cta">
                <a href="#diagnostico" className="btn">Haz el diagnóstico gratis</a>
                <a href="#hoja-de-ruta" className="btn btn--ghost">Ver hoja de ruta</a>
              </div>
              <ul className="hero__points">
                {heroPoints.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <div className="chat card">
                <div className="chat__bar">
                  <span /> <span /> <span />
                </div>
                <p className="chat__msg chat__msg--user">Resume las ventas del trimestre y dime qué producto ha crecido más.</p>
                <p className="chat__msg chat__msg--ai">
                  Las ventas crecieron en todas las líneas. El producto con mayor crecimiento fue la línea Pro, impulsada
                  por el canal online. ¿Quieres que prepare un gráfico para la reunión?
                </p>
                <p className="chat__msg chat__msg--user">Sí, y un borrador del correo para el equipo.</p>
                <div className="chat__typing">
                  <span /> <span /> <span />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO USAR LA IA */}
        <section id="usar" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Para cualquier profesional"
              title="Cómo utilizar la IA en tu día a día"
              text="No necesitas saber programar. Estas son las tareas donde la IA ya ahorra horas cada semana."
            />
            <div className="grid grid--3">
              {usos.map((u) => (
                <article key={u.title} className="card feature reveal">
                  <span className="feature__icon">{u.icon}</span>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </article>
              ))}
            </div>

            <div className="practicas reveal">
              <h3>5 reglas para sacarle partido</h3>
              <ol className="practicas__list">
                {buenasPracticas.map((b, i) => (
                  <li key={b.title}>
                    <span className="practicas__num">{i + 1}</span>
                    <div>
                      <strong>{b.title}</strong>
                      <p>{b.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* HOJA DE RUTA */}
        <section id="hoja-de-ruta" className="section section--alt">
          <div className="container">
            <SectionHeader
              eyebrow="Para empresas"
              title="Cómo implantar la IA en tu empresa"
              text="Una hoja de ruta en 5 fases. Empieza en pequeño, mide resultados y escala lo que funciona."
            />
            <ol className="timeline">
              {hojaDeRuta.map((f) => (
                <li key={f.fase} className="timeline__item reveal">
                  <span className="timeline__fase">{f.fase}</span>
                  <div className="card">
                    <div className="timeline__head">
                      <h3>{f.title}</h3>
                      <span className="tag">{f.duracion}</span>
                    </div>
                    <p>{f.text}</p>
                    <p className="timeline__entregable">
                      <span>Resultado:</span> {f.entregable}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* POR ÁREAS */}
        <section id="areas" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Casos de uso"
              title="Qué puede hacer la IA en cada departamento"
              text="Elige un área y descubre por dónde empezar."
            />
            <div className="reveal">
              <AreasTabs />
            </div>
          </div>
        </section>

        {/* RIESGOS */}
        <section className="section section--alt">
          <div className="container">
            <SectionHeader
              eyebrow="IA responsable"
              title="Lo que debes tener en cuenta"
              text="Implantar IA sin control es un riesgo. Estos son los cuatro frentes que toda empresa debe cubrir."
            />
            <div className="grid grid--4">
              {riesgos.map((r) => (
                <article key={r.title} className="card risk reveal">
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FUTURO */}
        <section id="futuro" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Lo que viene"
              title="Cómo será la empresa del futuro"
              text="Las empresas que se preparen hoy serán las que lideren mañana. Estas son las tendencias que marcarán los próximos años."
            />
            <div className="grid grid--2">
              {tendencias.map((t, i) => (
                <article key={t.title} className="card trend reveal">
                  <span className="trend__num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </article>
              ))}
            </div>
            <blockquote className="quote reveal">
              “La IA no sustituirá a las empresas. Las empresas que usen IA sustituirán a las que no lo hagan.”
            </blockquote>
          </div>
        </section>

        {/* DIAGNÓSTICO */}
        <section id="diagnostico" className="section section--alt">
          <div className="container container--narrow">
            <SectionHeader
              eyebrow="Test gratuito · 2 minutos"
              title="¿Cómo de preparada está tu empresa?"
              text="Responde 5 preguntas y recibe tu nivel de madurez en IA con recomendaciones personalizadas."
            />
            <Diagnostico />
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container container--narrow">
            <SectionHeader eyebrow="Dudas habituales" title="Preguntas frecuentes" />
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q} className="faq__item reveal">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section section--cta">
          <div className="container contacto">
            <div className="contacto__text reveal">
              <p className="eyebrow">Da el primer paso</p>
              <h2>¿Hablamos de la IA en tu empresa?</h2>
              <p className="lead">
                Cuéntanos qué proceso te gustaría mejorar y te ayudaremos a encontrar el mejor punto de partida.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a href="#" className="logo">
            <span className="logo__mark">◆</span> IA<span className="logo__accent">Empresa</span>
          </a>
          <p>© {new Date().getFullYear()} IAEmpresa · Hecho con React y Next.js</p>
        </div>
      </footer>
    </>
  );
}
