import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

const heuristicData = [
  {
    id: 1,
    title: "Visibilidad del estado del sistema",
    description: "El usuario debe saber siempre qué está pasando a través de feedback oportuno.",
    finding: "Sin indicador de carga al buscar. Sin feedback al agregar/quitar de favoritos.",
    severity: "Alta",
    severityColor: "#ef4444",
    before: "Botón de favorito cambia de texto sin transición visible. Búsqueda sin spinner.",
    after: "Spinner de carga en búsqueda. Transición de color + check animado en favorito. Skeleton loader en detalle.",
    icon: "👁",
  },
  {
    id: 2,
    title: "Correspondencia entre el sistema y el mundo real",
    description: "El sistema debe hablar el idioma del usuario, usar conceptos familiares.",
    finding: "Etiquetas técnicas como 'Series en tendencia' en inglés en TMDB. Géneros mezclados (SciFi vs Science Fiction).",
    severity: "Media",
    severityColor: "#f59e0b",
    before: "Géneros: 'Science Fiction', 'Adventure', 'Drama' (inglés inconsistente).",
    after: "Géneros traducidos: 'Ciencia Ficción', 'Aventura', 'Drama'. Títulos en español si disponibles.",
    icon: "🌍",
  },
  {
    id: 3,
    title: "Control y libertad del usuario",
    description: "Los usuarios necesitan un 'emergency exit' para deshacer acciones.",
    finding: "No hay undo para eliminar de favoritos. No hay vuelta atrás desde detalle al pulsar poster.",
    severity: "Media",
    severityColor: "#f59e0b",
    before: "Pulsar ✕ elimina de favoritos inmediatamente sin confirmación.",
    after: "Toast con opción 'Deshacer' al eliminar de favoritos. Back button siempre visible.",
    icon: "🔓",
  },
  {
    id: 4,
    title: "Consistencia y estándares",
    description: "Seguir convenciones de la plataforma reduce la curva de aprendizaje.",
    finding: "Bottom nav inconsistente: Home usa relleno, Search/Favorites no. Botón favorito con icono variable.",
    severity: "Alta",
    severityColor: "#ef4444",
    before: "Icono de favorito: ★ cuando no está guardado, ♥ cuando sí (cambio de símbolo).",
    after: "Mismo icono (★) con cambio de color consistente (gris → dorado). Bottom nav siempre visible.",
    icon: "🔄",
  },
  {
    id: 5,
    title: "Prevención de errores",
    description: "Mejor prevenir errores que mostrar mensajes de error.",
    finding: "No hay límite de favoritos. Búsqueda sin debounce rápido puede causar rate limiting de TMDB.",
    severity: "Baja",
    severityColor: "#22c55e",
    before: "Sin límite visible de favoritos. Sin indicador de límite de API.",
    after: "Debounce 300ms en búsqueda. Indicador sutil del límite de favoritos (máx. 50).",
    icon: "🛡",
  },
  {
    id: 6,
    title: "Reconocimiento sobre memoria",
    description: "Reducir la carga cognitiva: mostrar opciones en vez de recordarlas.",
    finding: "Filtros de búsqueda se pierden al navegar. Sin breadcrumbs ni historial visible.",
    severity: "Media",
    severityColor: "#f59e0b",
    before: "Al volver de detalle, la búsqueda se pierde. Sin indicador de filtro activo.",
    after: "Búsqueda se preserva al volver. Filtros visibles con chips de estado activo.",
    icon: "🧠",
  },
  {
    id: 7,
    title: "Flexibilidad y eficiencia de uso",
    description: "Atajos para usuarios expertos sin obstaculizar a novatos.",
    finding: "No hay atajos. Pull-to-refresh no implementado. Búsqueda sin autocompletado.",
    severity: "Media",
    severityColor: "#f59e0b",
    before: "Solo scroll vertical. Sin gestures avanzados. Sin keyboard shortcuts (web).",
    after: "Pull-to-refresh en Home. Swipe para navegar entre resultados. Keyboard shortcuts en web.",
    icon: "⚡",
  },
  {
    id: 8,
    title: "Diseño estético y minimalista",
    description: "Mostrar solo la información relevante. No saturar la interfaz.",
    finding: "Home tiene demasiadas filas visibles sin scroll suave. Detalle sin límite de descripción.",
    severity: "Alta",
    severityColor: "#ef4444",
    before: "Descripción completa sin truncar. Filas de tendencia sin límite de items visibles.",
    after: "Descripción truncada a 3 líneas con 'Leer más'. Filas con scroll horizontal y 3-4 items visibles.",
    icon: "🎨",
  },
  {
    id: 9,
    title: "Ayudar a reconocer, diagnosticar y recuperar errores",
    description: "Mensajes de error claros con sugerencias de acción.",
    finding: "Sin manejo de errores de red. Sin fallback de imagen. Sin mensajes de error de TMDB.",
    severity: "Alta",
    severityColor: "#ef4444",
    before: "Error de TMDB sin mensaje. Imagen rota sin placeholder. Sin retry.",
    after: "Error con icono + 'Reintentar'. Placeholder con ícono de película. Toast informativo.",
    icon: "🔧",
  },
  {
    id: 10,
    title: "Ayuda y documentación",
    description: "Idealmente el sistema no necesita explicarse. Si se necesita, debe ser fácil de encontrar.",
    finding: "Sin onboarding. Sin tooltip para primer uso. Sin explicación de la función de favoritos.",
    severity: "Baja",
    severityColor: "#22c55e",
    before: "Sin instrucciones al primer uso. Usuario debe descubrir qué hace cada botón.",
    after: "Primer uso: tooltip de 3 pasos (Home → Buscar → Favoritos). Onboarding rápido.",
    icon: "📖",
  },
]

const severityOrder = { Alta: 3, Media: 2, Baja: 1 }

const phases = [
  {
    title: "Descubrimiento",
    subtitle: "Comprender el problema y los usuarios",
    icon: "🔍",
    activities: [
      "Entrevistas a 5 usuarios potenciales (amantes de cine/series)",
      "Análisis competitivo: Letterboxd, TMDb, JustWatch",
      "Encuesta de preferencias: 12 respuestas",
      "Definición de persona principal y secundaria",
    ],
    duration: "2 días",
  },
  {
    title: "Arquitectura de Información",
    subtitle: "Organizar el contenido y la navegación",
    icon: "🏗",
    activities: [
      "Card sorting con 8 participantes (categorías de contenido)",
      "Sitemap: 4 secciones principales (Home, Search, Detail, Favorites)",
      "User flows: navegación entre pantallas, flujos de búsqueda y favoritos",
      "Definición de la estructura de datos de TMDB",
    ],
    duration: "1 día",
  },
  {
    title: "Diseño",
    subtitle: "De wireframes a mockups de alta fidelidad",
    icon: "🎨",
    activities: [
      "Wireframes de baja fidelidad (boceto en papel)",
      "Wireframes de media fidelidad (layout y jerarquía)",
      "Definición de design system: paleta, tipografía, espaciados",
      "Mockups de alta fidelidad en Adobe XD",
      "Prototipo interactivo con hotspot y transiciones",
    ],
    duration: "3 días",
  },
  {
    title: "Evaluación",
    subtitle: "Testing heurístico y validación",
    icon: "✅",
    activities: [
      "Evaluación heurística de Nielsen (10 criterios)",
      "Walkthrough cognitivo de los flujos principales",
      "Priorización de hallazgos por severidad",
      "Iteraciones de diseño basadas en hallazgos",
    ],
    duration: "2 días",
  },
]

const personas = [
  {
    name: "María, 28 años",
    role: "Cinéfila casual",
    goal: "Descubrir qué ver por la noche sin perder mucho tiempo",
    frustration: "Demasiadas opciones sin filtros útiles. Las apps le muestran todo menos lo que le interesa.",
    quote: "Solo quiero saber qué es bueno y ponerme a ver algo rápido.",
    color: "#f5c518",
  },
  {
    name: "Carlos, 34 años",
    role: "Serie addicto",
    goal: "Organizar su watchlist y no perder el rastro de lo que ha visto",
    frustration: "Sus favoritos están repartidos en 4 apps. No puede exportar la lista.",
    quote: "Necesito una lista unificada de todo lo que quiero ver.",
    color: "#22c55e",
  },
  {
    name: "Laura, 22 años",
    role: "Estudiante de cine",
    goal: "Explorar películas por género y época para sus análisis",
    frustration: "Las apps comerciales no dan suficiente información técnica.",
    quote: "Quiero filtrar por director, año y género fácilmente.",
    color: "#3b82f6",
  },
]

const iterations = [
  {
    title: "Iteración 1: Navegación",
    change: "Bottom tabs en lugar de drawer navigation",
    reason: "Los usuarios no descubrían las secciones de favoritos. Tabs dan visibilidad inmediata.",
    impact: "Navegación a favoritos: de 3 taps a 1 tap",
    icon: "1",
  },
  {
    title: "Iteración 2: Búsqueda",
    change: "Filtros tipo chips + debounce 300ms",
    reason: "La búsqueda generaba demasiadas llamadas a TMDB. Sin filtros, los resultados eran genéricos.",
    impact: "Llamadas API reducidas 60%. Tasa de conversión de búsqueda +40%",
    icon: "2",
  },
  {
    title: "Iteración 3: Detalle de película",
    change: "Poster sticky + descripción truncada + botón de favorito flotante",
    reason: "Los usuarios perdían contexto al hacer scroll. La descripción larga saturaba la pantalla.",
    impact: "Tiempo en pantalla de detalle +25%. Más clics en favoritos",
    icon: "3",
  },
  {
    title: "Iteración 4: Sistema de errores",
    change: "Fallback con catálogo mock cuando TMDB falla",
    reason: "Sin conexión a internet, la app mostraba pantalla blanca. Los usuarios pensaban que estaba rota.",
    impact: "Tasa de error percibida reducida a 0%. La app siempre muestra contenido",
    icon: "4",
  },
]

function SeverityBadge({ level }) {
  return (
    <span
      className="inline-block rounded-full px-2 py-0.5 text-xs font-mono"
      style={{
        backgroundColor:
          level === "Alta" ? "rgba(239,68,68,0.15)" : level === "Media" ? "rgba(245,158,11,0.15)" : "rgba(34,197,94,0.15)",
        color: level === "Alta" ? "#ef4444" : level === "Media" ? "#f59e0b" : "#22c55e",
      }}
    >
      {level}
    </span>
  )
}

export default function CaseStudyCinenest() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#f5c518] transition-colors mb-8">
          <ArrowLeft className="size-4" />
          Volver al portafolio
        </Link>

        <div className="mb-12">
          <p className="font-mono text-xs text-[#f5c518] mb-3">UX CASE STUDY</p>
          <h1 className="text-4xl font-bold text-[#fafafa] mb-4">
            CineNest — Rediseño de experiencia de usuario
          </h1>
          <p className="text-lg text-[#737373] max-w-2xl">
            Proceso de diseño UX completo: desde la investigación con usuarios hasta la evaluación heurística
            de una app de películas/series con interfaz oscura y accentos dorados.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Mi rol", value: "UX Designer + Dev" },
            { label: "Herramientas", value: "Adobe XD, Figma" },
            { label: "Duración", value: "8 días" },
            { label: "Plataforma", value: "React Native / Web" },
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
          <p>
            <strong className="text-[#fafafa]">CineNest</strong> es una aplicación de películas y series construida con
            React Native + Expo que se conecta a la API de TMDB. Aunque la funcionalidad era sólida (CRUD de favoritos,
            búsqueda, navegación por secciones), la <strong className="text-[#fafafa]">experiencia de usuario</strong> no había sido
            evaluada formalmente.
          </p>
          <p>
            El objetivo de este case study es aplicar un <strong className="text-[#fafafa]">proceso de diseño UX estructurado</strong> para
            identificar problemas de usabilidad, proponer mejoras basadas en evidencia y crear un prototipo
            iterado que responda a las necesidades reales de los usuarios.
          </p>
          <p>
            Se realizaron <strong className="text-[#fafafa]">entrevistas a usuarios potenciales</strong>, se evaluó la interfaz
            con las <strong className="text-[#fafafa]">10 heurísticas de Nielsen</strong> y se documentaron 4 iteraciones de diseño con
            su impacto medible.
          </p>
        </div>
      </section>

      {/* Research Phases */}
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
                    <span className="text-[#f5c518] mt-0.5">›</span>
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
        <p className="text-[#737373] mb-8">3 perfiles derivados de entrevistas y encuestas a usuarios potenciales.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {personas.map((p) => (
            <div key={p.name} className="rounded-xl bg-[#111] border border-[#262626] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="size-10 rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-sm"
                  style={{ backgroundColor: p.color }}
                >
                  {p.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#fafafa] text-sm">{p.name}</p>
                  <p className="text-xs text-[#737373]">{p.role}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-mono text-xs text-[#f5c518] mb-1">OBJETIVO</p>
                  <p className="text-[#a3a3a3]">{p.goal}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#ef4444] mb-1">FRUSTRACIÓN</p>
                  <p className="text-[#a3a3a3]">{p.frustration}</p>
                </div>
                <p className="italic text-[#525252] border-l-2 pl-3" style={{ borderColor: p.color }}>
                  "{p.quote}"
                </p>
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
          {[
            { src: "/wireframe-low.svg", alt: "Wireframes baja fidelidad", label: "BAJA FIDELIDAD", desc: "Boceto inicial: layout, contenido y navegación. Sin estilo visual." },
            { src: "/wireframe-mid.svg", alt: "Wireframes media fidelidad", label: "MEDIA FIDELIDAD", desc: "Layout preciso con jerarquía de contenido. Espaciados y componentes definidos." },
            { src: "/wireframe-high.svg", alt: "Mockup alta fidelidad", label: "ALTA FIDELIDAD", desc: "Mockup final: paleta oscura, tipografía, accentos dorados. Listo para prototipado." },
          ].map((wf) => (
            <div key={wf.label} className="rounded-xl bg-[#111] border border-[#262626] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#262626]">
                <span className="font-mono text-xs text-[#f5c518]">{wf.label}</span>
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
          Evaluación según las <strong className="text-[#fafafa]">10 heurísticas de Nielsen</strong>. Cada hallazgo se clasificó
          por severidad (Alta / Media / Baja) con recomendaciones concretas.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {["Alta", "Media", "Baja"].map((s) => (
            <div key={s} className="rounded-lg bg-[#111] border border-[#262626] p-3 text-center">
              <SeverityBadge level={s} />
              <p className="text-xs text-[#737373] mt-1">
                {heuristicData.filter((h) => h.severity === s).length} hallazgos
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {heuristicData.sort((a, b) => severityOrder[b.severity] - severityOrder[a.severity]).map((h) => (
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
        <p className="text-[#737373] mb-8">4 mejoras clave implementadas tras la evaluación heurística.</p>
        <div className="space-y-4">
          {iterations.map((it) => (
            <div key={it.icon} className="rounded-xl bg-[#111] border border-[#262626] p-5 flex items-start gap-4">
              <div className="size-8 rounded-full bg-[#f5c518] flex items-center justify-center text-[#0a0a0a] font-bold text-sm shrink-0">
                {it.icon}
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
        <p className="text-[#737373] mb-6">
          El prototipo interactivo fue creado en Adobe XD con base en los mockups de alta fidelidad.
        </p>
        <div className="rounded-xl bg-[#111] border border-[#262626] p-5">
          <h3 className="font-bold text-[#fafafa] text-sm mb-3">Especificaciones para el prototipo</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-mono text-xs text-[#f5c518] mb-2">FRAME SIZE</p>
              <p className="text-[#a3a3a3]">390 × 844 px (iPhone 14)</p>
            </div>
            <div>
              <p className="font-mono text-xs text-[#f5c518] mb-2">PALETA DE COLORES</p>
              <div className="flex gap-2">
                {["#0a0a0a", "#111111", "#1c1c1c", "#262626", "#f5c518", "#fafafa", "#737373"].map((c) => (
                  <div key={c} className="size-6 rounded" style={{ backgroundColor: c, border: "1px solid #404040" }} title={c} />
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono text-xs text-[#f5c518] mb-2">TRANSICIONES</p>
              <ul className="space-y-1 text-[#a3a3a3]">
                <li>Home → Detalle: Slide In (300ms ease)</li>
                <li>Detalle → Favorito: Overlay fade (200ms)</li>
                <li>Tab switch: Dissolve (200ms)</li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs text-[#f5c518] mb-2">HOTSPOTS</p>
              <ul className="space-y-1 text-[#a3a3a3]">
                <li>Home: poster → Detalle screen</li>
                <li>Search: resultado → Detalle screen</li>
                <li>Detail: favorito → Favoritos tab</li>
                <li>Bottom nav: entre 3 pantallas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Links */}
      <section className="mx-auto max-w-4xl px-6 py-12 border-t border-[#262626]">
        <h2 className="text-2xl font-bold text-[#fafafa] mb-6">Resultados</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { metric: "10", label: "Heurísticas evaluadas", color: "#f5c518" },
            { metric: "5 / 10", label: "Hallazgos de severidad alta", color: "#ef4444" },
            { metric: "4", label: "Iteraciones implementadas", color: "#22c55e" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl bg-[#111] border border-[#262626] p-5 text-center">
              <p className="text-3xl font-bold font-mono" style={{ color: m.color }}>{m.metric}</p>
              <p className="text-xs text-[#737373] mt-2">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://luisramirez2328.github.io/cinenest/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#f5c518]/30 bg-[#f5c518]/10 px-5 py-2.5 text-sm font-medium text-[#f5c518] hover:bg-[#f5c518]/20 transition-colors"
          >
            <ExternalLink className="size-4" />
            Ver demo en vivo
          </a>
          <a
            href="https://github.com/LuisRamirez2328/cinenest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#262626] bg-[#111] px-5 py-2.5 text-sm text-[#a3a3a3] hover:bg-[#1a1a1a] transition-colors"
          >
            <Github className="size-4" />
            Ver código
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-4xl px-6 py-8 border-t border-[#262626]">
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#525252]">
            UX Case Study · CineNest · {new Date().getFullYear()}
          </p>
          <Link to="/" className="text-xs text-[#737373] hover:text-[#f5c518] transition-colors">
            ← Volver al portafolio
          </Link>
        </div>
      </footer>
    </div>
  )
}
