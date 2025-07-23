import { useState } from 'react'
import AnimatedSection from './ui/AnimatedSection'
import { Testimonial } from '../models'
import './TestimonialSlider.scss'

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Manu besitzt die Gabe, durch ihre Präsenz, ihre Sensibilität und Sanftheit den Raum für tiefes Fühlen zu öffnen. Ich habe mich bei ihr unglaublich sicher und angenommen gefühlt und konnte lang verdrängte Emotionen sanft integrieren. Danke!🙏🏻",
    author: "Sarah"
  },
  {
    id: 2,
    text: "Die Atemsitzungen bei Manuela haben mir geholfen, wieder zu mir selbst zu finden. Ihre einfühlsame Art schafft einen sicheren Raum, in dem Heilung geschehen kann.",
    author: "Michael"
  },
  {
    id: 3,
    text: "Manuelas Yogastunden sind eine Oase der Ruhe in meinem hektischen Alltag. Ich gehe jedes Mal erfüllt und ausgeglichen nach Hause.",
    author: "Lisa"
  }
]

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <AnimatedSection animation="fade-up">
                <div className="testimonial-card">
                  <p className="testimonial-text">
                    „{testimonial.text}"
                  </p>
                  <p className="testimonial-author">— {testimonial.author}</p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-md transition-all"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-md transition-all"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider