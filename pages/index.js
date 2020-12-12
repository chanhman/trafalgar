import Layout from 'components/Layout'
import Hero from 'components/Hero'
import ServicesSection from 'components/ServicesSection'
import HighlightsSection from 'components/HighlightsSection'
import TestimonialsSection from 'components/TestimonialsSection'
import LatestArticlesSection from 'components/LatestArticlesSection'

export default function Home() {
  return (
    <Layout title="Trafalgar">
      <Hero />
      <ServicesSection />
      <HighlightsSection />
      <TestimonialsSection />
      <LatestArticlesSection />
    </Layout>
  )
}
