import styles from './styles.module.scss'

export default function Article({ image, heading, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.description}>{description}</p>
        <a className={styles.link} href="#">
          Read more
        </a>
      </div>
    </div>
  )
}
