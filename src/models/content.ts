export interface Testimonial {
  id: number
  text: string
  author: string
  role: string
  image: string
}

export interface ServiceCardProps {
  title: string
  description: string
  imagePath: string
  link: string
}