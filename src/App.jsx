import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import HomePage from "./pages/HomePage"
import CaseStudyCinenest from "./pages/CaseStudyCinenest"
import "./index.css"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies/cinenest" element={<CaseStudyCinenest />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

