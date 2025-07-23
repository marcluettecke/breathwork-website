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
}

export interface ContainerProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export interface HeadingProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  className?: string
}

export interface SectionProps {
  children: ReactNode
  className?: string
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'gray' | 'primary' | 'secondary'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  as?: 'button' | 'a'
  href?: string
}

export interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
}