interface CircularPortraitProps {
  src: string
  alt: string
  size?: 'small' | 'medium' | 'large'
  className?: string
}

const CircularPortrait = ({ 
  src, 
  alt, 
  size = 'medium',
  className = ''
}: CircularPortraitProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-48 h-48 md:w-64 md:h-64'
      case 'medium':
        return 'w-64 h-64 md:w-80 md:h-80'
      case 'large':
        return 'w-80 h-80 md:w-96 md:h-96'
      default:
        return 'w-64 h-64 md:w-80 md:h-80'
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${getSizeClasses()} ${className}`}
    />
  )
}

export default CircularPortrait