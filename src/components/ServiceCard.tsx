import { Link } from 'react-router-dom'
import Heading from './ui/Heading'
import Text from './ui/Text'
import { ServiceCardProps } from '../models'

const ServiceCard = ({ title, description, link }: ServiceCardProps) => {
  // Use placeholder images for now
  const placeholderImages = {
    yoga: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800',
    breath: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
  
  const imageUrl = title.toLowerCase().includes('yoga') ? placeholderImages.yoga : placeholderImages.breath
  
  return (
    <article className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <Link to={link} className="block relative h-[400px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
          <Heading level={3} className="text-white mb-3">
            {title}
          </Heading>
          <Text className="text-white/90 mb-4">
            {description}
          </Text>
          
          <div className="mt-2">
            <span className="text-white/80 hover:text-white transition-colors inline-flex items-center text-sm">
              mehr Informationen
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ServiceCard