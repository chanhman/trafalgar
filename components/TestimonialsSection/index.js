import Slider from 'react-slick'
import styles from './styles.module.scss'
import testimonialsData from './testimonialsData'

export default function TestimonialsSection() {
  const sliderSettings = {
    arrows: false,
    className: 'yas',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.heading}>What our customer are saying</h2>
        <Slider className={styles.yas} {...sliderSettings}>
          {testimonialsData.map((testimonial) => (
            <blockquote key={testimonial.id}>
              <div className={styles.testimonial}>
                <p className={styles.quote}>{testimonial.quote}</p>
                <footer>
                  <img
                    className={styles.avatar}
                    src={testimonial.avatar}
                    alt=""
                  />
                  <cite>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.position}>{testimonial.position}</div>
                  </cite>
                </footer>
              </div>
            </blockquote>
          ))}
        </Slider>
      </section>
    </>
  )
}
