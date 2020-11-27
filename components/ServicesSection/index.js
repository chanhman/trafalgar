import styles from './styles.module.scss'

const services = [
  {
    icon: '/serviceIcon1.svg',
    name: 'Search doctor',
    description:
      'Choose your doctor from thousands of specialist, general, and trusted hospitals',
  },
  {
    icon: '/serviceIcon2.svg',
    name: 'Online pharmacy',
    description:
      'Buy  your medicines with our mobile application with a simple delivery system',
  },
  {
    icon: '/serviceIcon3.svg',
    name: 'Consultation',
    description:
      'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: '/serviceIcon4.svg',
    name: 'Details info',
    description:
      'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: '/serviceIcon5.svg',
    name: 'Emergency care',
    description:
      'You can get 24/7 urgent care for yourself or your children and your lovely family',
  },
  {
    icon: '/serviceIcon6.svg',
    name: 'Tracking',
    description: 'Track and save your medical history and health data ',
  },
]

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
      <div className={styles.servicesWrapper}>
        <div className={styles.services}>
          {services.map((service) => (
            <div className={styles.service}>
              <div className={styles.serviceIcon}>
                <img src={service.icon} alt=""/>
              </div>
              <h3 className={styles.serviceName}>{service.name}</h3>
              <div className={styles.serviceDescription}>
                {service.description}
              </div>
            </div>
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
