import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { lazy, Suspense } from "react"
import "./index.css"

const HomePage = lazy(() => import("./pages/HomePage"))
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"))

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-[#0a0a0a]"><span className="font-mono text-sm text-[#22c55e]">Loading...</span></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App

