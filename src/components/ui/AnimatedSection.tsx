import { ReactNode } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { AnimatedSectionProps } from '../../models'

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up' 
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const animationClasses = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-in': 'opacity-0',
    'fade-right': '-translate-x-10 opacity-0',
    'fade-left': 'translate-x-10 opacity-0',
  }

  const visibleClasses = 'translate-y-0 translate-x-0 opacity-100'

  return (
    <div
      ref={ref as any}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClasses : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection