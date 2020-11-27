import styles from './styles.module.scss'
import servicesData from './servicesData'
import Service from './Service'

export default function ServicesSection() {
  return (
    <section>
      <div className={styles.intro}>
        <h2 className={styles.introHeading}>Our services</h2>
        <p className={styles.introDescription}>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className={styles.servicesContainer}>
        <div className={styles.services}>
          {servicesData.map((service) => (
            <Service
              icon={service.icon}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
        <div className={styles.footer}>
          <a className={styles.button} href="#">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
