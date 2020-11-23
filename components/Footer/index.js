import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div>
          <img src="/logo-white.svg" alt="" />
          <p className={styles.tagline}>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className={styles.copyright}>
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <div className={styles.linksColumns}>
          <div>
            <p className={styles.linksHeading}>Company</p>
            <ul className={styles.links}>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Find a doctor</a>
              </li>
              <li>
                <a href="#">Apps</a>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.linksHeading}>Region</p>
            <ul className={styles.links}>
              <li>
                <a href="#">Indonesia</a>
              </li>
              <li>
                <a href="#">Singapore</a>
              </li>
              <li>
                <a href="#">Hongkong</a>
              </li>
              <li>
                <a href="#">Canada</a>
              </li>
            </ul>
          </div>
          <div>
            <p className={styles.linksHeading}>Help</p>
            <ul className={styles.links}>
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Contact support</a>
              </li>
              <li>
                <a href="#">Instructions</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
