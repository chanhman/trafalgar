import styles from './styles.module.scss'
import Article from './Article'
import LatestArticlesData from './LatestArticlesData'

export default function LatestArticlesSection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Check out our latest article</h2>
      <div className={styles.articlesContainer}>
        {LatestArticlesData.map((latestArticle) => (
          <Article
            image={latestArticle.image}
            heading={latestArticle.heading}
            description={latestArticle.description}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <a className={styles.button} href="#">
          View all
        </a>
      </div>
    </section>
  )
}
