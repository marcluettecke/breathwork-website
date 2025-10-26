import { SectionProps } from '../../models'

const Section = ({ children, className = '', backgroundImage, overlay = false }: SectionProps) => {
  const baseClasses = 'relative'
  
  return (
    <section 
      className={`${baseClasses} ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : undefined}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

export default Section