import { useState, useEffect } from 'react'
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
  const [cardsToShow, setCardsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1)
        setCurrentIndex(0)
      } else {
        setCardsToShow(3)
        setCurrentIndex(0)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  const cardWidthPercent = 100 / cardsToShow
  const gapRem = 2
  const cardWidthCalc = cardsToShow === 1
    ? '100%'
    : `calc(${cardWidthPercent}% - ${(gapRem * (cardsToShow - 1)) / cardsToShow}rem)`

  const transformCalc = cardsToShow === 1
    ? `translateX(calc(-${currentIndex * 100}% - ${currentIndex * gapRem}rem + 0rem))`
    : `translateX(calc(-${currentIndex * cardWidthPercent}% - ${currentIndex * (gapRem / cardsToShow)}rem))`

  return (
    <div className="relative">
      <div className="testimonial-slider-wrapper overflow-hidden px-4 md:px-0">
        <div
          className="testimonial-slider-track flex transition-transform duration-500 ease-in-out"
          style={{
            gap: '2rem',
            transform: transformCalc
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0" style={{ width: cardWidthCalc }}>
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

      {/* Navigation Arrows - visible on both mobile and desktop */}
      {testimonials.length > cardsToShow && (
        <>
          <button
            onClick={prevCard}
            disabled={currentIndex === 0}
            className="absolute left-1/2 bottom-0 -translate-x-20 translate-y-16 md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-12 md:translate-y-0 bg-white hover:bg-white text-primary p-3 rounded-full shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous card"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextCard}
            disabled={currentIndex >= maxIndex}
            className="absolute right-1/2 bottom-0 translate-x-20 translate-y-16 md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-12 md:translate-y-0 bg-white hover:bg-white text-primary p-3 rounded-full shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
