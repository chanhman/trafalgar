import styles from './styles.module.scss'

export default function Highlight({image, heading, description, ctaLabel}) {
  return (
    <section className={styles.highlight}>
      <div>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        <a className={styles.button} href="#">
          {ctaLabel}
        </a>
      </div>
    </section>
  )
}
