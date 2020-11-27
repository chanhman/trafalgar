import Layout from 'components/Layout'
import Hero from 'components/Hero'
import ServicesSection from 'components/ServicesSection'
import HighlightsSection from 'components/HighlightsSection'
import LatestArticlesSection from 'components/LatestArticlesSection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <HighlightsSection />
      <LatestArticlesSection />
    </Layout>
  )
}
