import { v4 as uuidv4 } from 'uuid'

const highlightsData = [
  {
    id: uuidv4(),
    image: '/highlightImage1.png',
    heading: 'Leading healthcare providers',
    description:
      'Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver',
    ctaLabel: 'Learn more',
  },
  {
    id: uuidv4(),
    image: '/highlightImage2.png',
    heading: 'Download our mobile apps',
    description:
      'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely',
    ctaLabel: 'Download',
  },
]

export default highlightsData
