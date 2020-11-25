import styles from './styles.module.scss'

export default function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h1 className={styles.heading}>Virtual healthcare for you</h1>
          <p className={styles.description}>
            Trafalgar provides progressive, and affordable healthcare, accessible
            on mobile and online for everyone
          </p>
          <a className={styles.button} href="#">Consult today</a>
        </div>
        <div>
          <img src="/hero-image.png" alt=""/>
        </div>
      </div>
    </section>
  )
}
