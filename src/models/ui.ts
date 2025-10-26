import { ReactNode, ButtonHTMLAttributes } from 'react'

export interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
  delay?: number
  className?: string
}

export interface TextProps {
  children: ReactNode
  variant?: 'body' | 'lead' | 'small'
  className?: string
  as?: 'p' | 'span' | 'div'
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl'
}

export interface ContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'
}

export interface HeadingProps {
  children: ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  className?: string
}

export interface SectionProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'gray' | 'primary' | 'secondary'
  backgroundImage?: string
  overlay?: boolean
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  as?: 'button' | 'a' | 'link'
  href?: string
  to?: string
}

export interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}