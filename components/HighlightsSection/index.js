import styles from './styles.module.scss'
import Highlight from './Highlight'
import highlightsData from './highlightsData.js'

export default function HighlightsSection() {
  return (
    <div className={styles.container}>
      {highlightsData.map((highlight) => (
        <Highlight
          image={highlight.image}
          heading={highlight.heading}
          description={highlight.description}
          ctaLabel={highlight.ctaLabel}
        />
      ))}
    </div>
  )
}
