import { v4 as uuidv4 } from 'uuid'

const servicesData = [
  {
id: uuidv4(),
    icon: '/serviceIcon1.svg',
    name: 'Search doctor',
    description:
      'Choose your doctor from thousands of specialist, general, and trusted hospitals',
  },
  {
    id: uuidv4(),
    icon: '/serviceIcon2.svg',
    name: 'Online pharmacy',
    description:
      'Buy  your medicines with our mobile application with a simple delivery system',
  },
  {
    id: uuidv4(),
    icon: '/serviceIcon3.svg',
    name: 'Consultation',
    description:
      'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    id: uuidv4(),
    icon: '/serviceIcon4.svg',
    name: 'Details info',
    description:
      'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    id: uuidv4(),
    icon: '/serviceIcon5.svg',
    name: 'Emergency care',
    description:
      'You can get 24/7 urgent care for yourself or your children and your lovely family',
  },
  {
    id: uuidv4(),
    icon: '/serviceIcon6.svg',
    name: 'Tracking',
    description: 'Track and save your medical history and health data ',
  },
]

export default servicesData
