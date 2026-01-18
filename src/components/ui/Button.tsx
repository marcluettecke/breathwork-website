import { Link } from 'react-router-dom'
import { ButtonProps } from '../../models'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  as = 'button',
  to,
  href,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'inline-block rounded-button transition-colors duration-200 font-normal'

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-primary-light text-white hover:bg-primary',
    white: 'bg-white text-black hover:bg-gray-100',
    outline: 'border-2 border-primary text-text-dark hover:bg-primary hover:text-white',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-4 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const widthClass = fullWidth ? 'w-full text-center' : ''
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`
  
  if (as === 'link' && to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    )
  }
  
  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  )
}

export default Button