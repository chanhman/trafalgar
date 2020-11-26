import styles from './styles.module.scss'

const services = [
  {
    icon: '',
    name: 'Search doctor',
    description:
      'Choose your doctor from thousands of specialist, general, and trusted hospitals',
  },
  {
    icon: '',
    name: 'Online pharmacy',
    description:
      'Buy  your medicines with our mobile application with a simple delivery system',
  },
  {
    icon: '',
    name: 'Consultation',
    description:
      'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: '',
    name: 'Details info',
    description:
      'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: '',
    name: 'Emergency care',
    description:
      'You can get 24/7 urgent care for yourself or your children and your lovely family',
  },
  {
    icon: '',
    name: 'Tracking',
    description: 'Track and save your medical history and health data ',
  },
]

export default function ServicesSection() {
  return (
    <section>
      <h2>Our services</h2>
      <p>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      {services.map((service) => (
        <div>
          <div>{service.name}</div>
          <div>{service.description}</div>
        </div>
      ))}
      <a href="#">Learn more</a>
    </section>
  )
}
