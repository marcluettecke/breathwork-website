import { TextProps } from '../../models'

const Text = ({ children, className = '', as = 'p', size = 'base' }: TextProps) => {
  const Tag = as
  
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  }
  
  return (
    <Tag className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Tag>
  )
}

export default Text