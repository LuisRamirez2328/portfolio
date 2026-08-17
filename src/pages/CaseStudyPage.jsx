import { useParams, Navigate } from "react-router-dom"
import CaseStudy from "../components/CaseStudy"
import { caseStudies } from "../data/caseStudies"

export default function CaseStudyPage() {
  const { slug } = useParams()
  const data = caseStudies[slug]
  if (!data) return <Navigate to="/" replace />
  return <CaseStudy data={data} key={slug} />
}
