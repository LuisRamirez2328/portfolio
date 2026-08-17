import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

function SeverityBadge({ level }) {
  const colors = {
    Alta: { bg: "rgba(239,68,68,0.15)", text: "#ef4444" },
    Media: { bg: "rgba(245,158,11,0.15)", text: "#f59e0b" },
    Baja: { bg: "rgba(34,197,94,0.15)", text: "#22c55e" },
  }
  const c = colors[level] || colors.Media
  return (
    <span className="inline-block rounded-full px-2 py-0.5 text-xs font-mono" style={{ backgroundColor: c.bg, color: c.text }}>
      {level}
    </span>
  )
}

const severityOrder = { Alta: 3, Media: 2, Baja: 1 }

export default function CaseStudy({ data }) {
  const {
    title,
    subtitle,
    role,
    tools,
    duration,
    platform,
    overview,
    phases,
    personas,
    wireframes,
    heuristicData,
    iterations,
    adobeXDSpecs,
    results,
    demoUrl,
    codeUrl,
    accentColor = "#f5c518",
  } = data

  const sorted = [...heuristicData].sort((a, b) => severityOrder[b.severity] - severityOrder[a.severity])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#f5c518] transition-colors mb-8">
          <ArrowLeft className="size-4" />
          Volver al portafolio
        </Link>

        <div className="mb-12">
          <p className="font-mono text-xs mb-3" style={{ color: accentColor }}>UX CASE STUDY</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">{title}</h1>
          <p className="text-lg text-[#737373] max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Mi rol", value: role },
            { label: "Herramientas", value: tools },
            { label: "Duración", value: duration },
            { label: "Plataforma", value: platform },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-[#111] border border-[#262626] p-4">
              <p className="font-mono text-xs text-[#737373]">{item.label}</p>
              <p className="text-sm text-[#fafafa] mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-[#262626]">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-6">Resumen del proyecto</h2>
        <div className="space-y-4 text-[#a3a3a3] leading-relaxed">
          {overview.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#fafafa]">$1</strong>') }} />
          ))}
        </div>
      </section>

      {/* Phases */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-[#262626]">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-8">Fases del proyecto</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {phases.map((phase) => (
            <div key={phase.title} className="rounded-xl bg-[#111] border border-[#262626] p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{phase.icon}</span>
                <div>
                  <h3 className="font-bold text-[#fafafa]">{phase.title}</h3>
                  <p className="text-xs text-[#737373]">{phase.subtitle}</p>
                </div>
                <span className="ml-auto font-mono text-xs text-[#525252]">{phase.duration}</span>
              </div>
              <ul className="space-y-1.5">
                {phase.activities.map((act, i) => (
                  <li key={i} className="text-sm text-[#a3a3a3] flex items-start gap-2">
                    <span style={{ color: accentColor }} className="mt-0.5">›</span>
                    {act}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Personas */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-[#262626]">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-3">Personas</h2>
        <p className="text-[#737373] mb-8">Perfiles derivados de entrevistas y encuestas a usuarios potenciales.</p>
        <div className={`grid gap-4 ${personas.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {personas.map((p) => (
            <div key={p.name} className="rounded-xl bg-[#111] border border-[#262626] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-sm" style={{ backgroundColor: p.color }}>
                  {p.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#fafafa] text-sm">{p.name}</p>
                  <p className="text-xs text-[#737373]">{p.role}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-mono text-xs mb-1" style={{ color: accentColor }}>OBJETIVO</p>
                  <p className="text-[#a3a3a3]">{p.goal}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#ef4444] mb-1">FRUSTRACIÓN</p>
                  <p className="text-[#a3a3a3]">{p.frustration}</p>
                </div>
                <p className="italic text-[#525252] border-l-2 pl-3" style={{ borderColor: p.color }}>"{p.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wireframes */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-[#262626]">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-3">Wireframes</h2>
        <p className="text-[#737373] mb-8">Evolución desde boceto hasta mockup de alta fidelidad.</p>
        <div className="space-y-6">
          {wireframes.map((wf) => (
            <div key={wf.label} className="rounded-xl bg-[#111] border border-[#262626] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#262626]">
                <span className="font-mono text-xs" style={{ color: accentColor }}>{wf.label}</span>
                <span className="text-xs text-[#525252]">{wf.desc}</span>
              </div>
              <div className="p-4">
                <img src={wf.src} alt={wf.alt} className="w-full rounded-lg" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heuristic Evaluation */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-[#262626]">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-3">Evaluación heurística</h2>
        <p className="text-[#737373] mb-4">
          Evaluación según las <strong className="text-[#fafafa]">10 heurísticas de Nielsen</strong>. Cada hallazgo se clasificó por severidad.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {["Alta", "Media", "Baja"].map((s) => (
            <div key={s} className="rounded-lg bg-[#111] border border-[#262626] p-3 text-center">
              <SeverityBadge level={s} />
              <p className="text-xs text-[#737373] mt-1">{heuristicData.filter((h) => h.severity === s).length} hallazgos</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {sorted.map((h) => (
            <div key={h.id} className="rounded-xl bg-[#111] border border-[#262626] overflow-hidden">
              <div className="flex items-start gap-4 p-5">
                <span className="text-2xl mt-0.5">{h.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#fafafa] text-sm">{h.title}</h3>
                    <SeverityBadge level={h.severity} />
                  </div>
                  <p className="text-xs text-[#737373] mb-3 italic">{h.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-[#0a0a0a] border border-[#262626] p-3">
                      <p className="font-mono text-xs text-[#ef4444] mb-1">ANTES</p>
                      <p className="text-xs text-[#a3a3a3]">{h.before}</p>
                    </div>
                    <div className="rounded-lg bg-[#0a0a0a] border border-[#22c55e]/20 p-3">
                      <p className="font-mono text-xs text-[#22c55e] mb-1">DESPUÉS</p>
                      <p className="text-xs text-[#a3a3a3]">{h.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Iterations */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-[#262626]">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-3">Iteraciones de diseño</h2>
        <p className="text-[#737373] mb-8">Mejoras clave implementadas tras la evaluación heurística.</p>
        <div className="space-y-4">
          {iterations.map((it, i) => (
            <div key={i} className="rounded-xl bg-[#111] border border-[#262626] p-5 flex items-start gap-4">
              <div className="size-8 rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-sm shrink-0" style={{ backgroundColor: accentColor }}>
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#fafafa] text-sm mb-1">{it.title}</h3>
                <p className="text-sm text-[#a3a3a3] mb-2">{it.change}</p>
                <p className="text-xs text-[#737373] italic mb-2">Razón: {it.reason}</p>
                <p className="font-mono text-xs text-[#22c55e]">Impacto: {it.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Adobe XD Specs */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-[#262626]">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-3">Prototipo en Adobe XD</h2>
        <p className="text-[#737373] mb-6">El prototipo interactivo fue creado en Adobe XD con base en los mockups de alta fidelidad.</p>
        <div className="rounded-xl bg-[#111] border border-[#262626] p-5">
          <h3 className="font-bold text-[#fafafa] text-sm mb-3">Especificaciones para el prototipo</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {Object.entries(adobeXDSpecs).map(([key, value]) => (
              <div key={key}>
                <p className="font-mono text-xs mb-2" style={{ color: accentColor }}>{key.replace(/([A-Z])/g, " $1").toUpperCase()}</p>
                {Array.isArray(value) ? (
                  <ul className="space-y-1 text-[#a3a3a3]">
                    {value.map((v, i) => <li key={i}>{v}</li>)}
                  </ul>
                ) : typeof value === "string" && value.startsWith("#") ? (
                  <div className="flex gap-2">
                    {value.split(",").map((c, i) => (
                      <div key={i} className="size-6 rounded" style={{ backgroundColor: c.trim(), border: "1px solid #404040" }} title={c.trim()} />
                    ))}
                  </div>
                ) : (
                  <p className="text-[#a3a3a3]">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-[#262626]">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-6">Resultados</h2>
        <div className={`grid gap-4 mb-10 ${results.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
          {results.map((m) => (
            <div key={m.label} className="rounded-xl bg-[#111] border border-[#262626] p-5 text-center">
              <p className="text-3xl font-bold font-mono" style={{ color: m.color || accentColor }}>{m.metric}</p>
              <p className="text-xs text-[#737373] mt-2">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors" style={{ borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10`, color: accentColor }}>
              <ExternalLink className="size-4" />
              Ver demo en vivo
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#262626] bg-[#111] px-5 py-2.5 text-sm text-[#a3a3a3] hover:bg-[#1a1a1a] transition-colors">
              <Github className="size-4" />
              Ver código
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-4xl px-6 py-8 border-t border-[#262626]">
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#525252]">UX Case Study · {title.split("—")[0].trim()} · {new Date().getFullYear()}</p>
          <Link to="/" className="text-xs text-[#737373] hover:text-[#f5c518] transition-colors">← Volver al portafolio</Link>
        </div>
      </footer>
    </div>
  )
}
