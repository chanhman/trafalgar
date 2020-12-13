import { v4 as uuidv4 } from 'uuid'

const LatestArticlesData = [
  {
    id: uuidv4(),
    image: '/articleThumb1.jpg',
    heading: 'Disease detection, check up in the laboratory',
    description:
      'In this case, the role of the health laboratory is very important to do a disease detection...',
  },
  {
    id: uuidv4(),
    image: '/articleThumb2.jpg',
    heading: 'Herbal medicines that are safe for consumption',
    description:
      'Herbal medicine is very widely used at this time because of its very good for your health...',
  },
  {
    id: uuidv4(),
    image: '/articleThumb3.jpg',
    heading: 'Natural care for healthy facial skin',
    description:
      'A healthy lifestyle should start from now and also for your skin health. There are some...',
  },
]

export default LatestArticlesData
