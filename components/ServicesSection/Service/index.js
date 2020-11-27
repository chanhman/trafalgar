import styles from './styles.module.scss'

export default function Service({icon, name, description}) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
