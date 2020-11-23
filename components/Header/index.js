import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.container}>
      <a href="#">
        <img src="./logo.svg" alt="" />
      </a>
      <nav>
        <ul className={styles.links}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Find a doctor</a>
          </li>
          <li>
            <a href="#">Apps</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">About us </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
