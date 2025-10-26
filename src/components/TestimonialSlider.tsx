import { useState } from 'react'
import { Testimonial } from '../models'
import './TestimonialSlider.scss'

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Sie ist einfühlsam, klar und lässt den Raum den es braucht seine tiefsten Emotionen in Sicherheit und Verbundenheit anzuschauen und zu integrieren",
    author: "Manuel",
    role: "Atemklient",
    image: "https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/d1632acc-fd45-460c-a971-22648ddbe9b8/WhatsApp+Image+2025-04-26+at+20.29.53.jpeg"
  },
  {
    id: 2,
    text: "Ich bin seit 2011 Manus Yogaschülerin. Unser Yoga-Kurs gibt mir körperliche Kraft und seelische Stärke und das bedeutet für mich eine starke Verbesserung meiner Lebensqualität.",
    author: "Catrin",
    role: "Yogaschülerin",
    image: "https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/6a760c2d-acbb-449a-a0b6-5d8542413746/PHOTO-2025-05-22-11-15-54.jpg"
  },
  {
    id: 3,
    text: "Die gemeinsame Zeit mit dir war für mich sehr wertvoll. In den Yogastunden, den Atemsitzungen und auch in der 1:1-Arbeit mit The Work habe ich mich immer gut gehalten und gesehen gefühlt.",
    author: "Anh",
    role: "Yogaschülerin & Klientin",
    image: "https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/67b49b38-bd79-424b-8a09-ca6758afedde/PHOTO-2025-05-17-10-54-30.jpg"
  },
  {
    id: 4,
    text: "Die gemeinsame Zeit mit dir war für mich sehr wertvoll. In den Yogastunden, den Atemsitzungen und auch in der 1:1-Arbeit mit The Work habe ich mich immer gut gehalten und gesehen gefühlt.",
    author: "Anh",
    role: "Yogaschülerin & Klientin",
    image: "https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/67b49b38-bd79-424b-8a09-ca6758afedde/PHOTO-2025-05-17-10-54-30.jpg"
  },
  {
    id: 5,
    text: "Sie ist einfühlsam, klar und lässt den Raum den es braucht seine tiefsten Emotionen in Sicherheit und Verbundenheit anzuschauen und zu integrieren",
    author: "Manuel",
    role: "Atemklient",
    image: "https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/d1632acc-fd45-460c-a971-22648ddbe9b8/WhatsApp+Image+2025-04-26+at+20.29.53.jpeg"
  },
  {
    id: 6,
    text: "Ich bin seit 2011 Manus Yogaschülerin. Unser Yoga-Kurs gibt mir körperliche Kraft und seelische Stärke und das bedeutet für mich eine starke Verbesserung meiner Lebensqualität.",
    author: "Catrin",
    role: "Yogaschülerin",
    image: "https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/6a760c2d-acbb-449a-a0b6-5d8542413746/PHOTO-2025-05-22-11-15-54.jpg"
  }
]

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const cardsToShow = 3
  const maxIndex = testimonials.length - cardsToShow

  const nextCard = () => {
    if (!isTransitioning && currentIndex < maxIndex) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const prevCard = () => {
    if (!isTransitioning && currentIndex > 0) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev - 1)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  return (
    <div className="relative">
      <div className="testimonial-slider-wrapper overflow-hidden">
        <div
          className="testimonial-slider-track flex transition-transform duration-500 ease-in-out"
          style={{
            gap: '2rem',
            transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 0.667}rem))`
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0" style={{ width: 'calc(33.333% - 1.333rem)' }}>
              <div className="testimonial-card h-full">
                <div className="testimonial-image-wrapper">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="testimonial-image"
                  />
                </div>
                <p className="testimonial-text">
                  „{testimonial.text}"
                </p>
                <p className="testimonial-author">
                  {testimonial.author} - {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {testimonials.length > cardsToShow && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-md transition-all hidden md:block disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextCard}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-md transition-all hidden md:block disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next card"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

export default TestimonialSlider
