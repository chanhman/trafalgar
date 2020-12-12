import Slider from 'react-slick'
import styles from './styles.module.scss'

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
          <blockquote>
            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely."
              </p>
              <footer>
                <img
                  className={styles.avatar}
                  src="/testimonial-avatar.jpg"
                  alt=""
                />
                <cite>
                  <div className={styles.name}>Edward Newgate</div>
                  <div className={styles.position}>Founder Circle</div>
                </cite>
              </footer>
            </div>
          </blockquote>
          <blockquote>
            <div className={styles.testimonial}>
              <p className={styles.quote}>
                "Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely."
              </p>
              <footer>
                <img
                  className={styles.avatar}
                  src="/testimonial-avatar.jpg"
                  alt=""
                />
                <cite>
                  <div className={styles.name}>Edward Newgate</div>
                  <div className={styles.position}>Founder Circle</div>
                </cite>
              </footer>
            </div>
          </blockquote>
        </Slider>
      </section>
    </>
  )
}
