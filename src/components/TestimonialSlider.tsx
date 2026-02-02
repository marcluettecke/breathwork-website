import { useState, useEffect } from 'react'
import { Testimonial } from '../models'
import './TestimonialSlider.scss'
import manuelaHeadshot from '../assets/images/manuela_headshot.jpeg'
import judithHeadshot from '../assets/images/judith_headshot.png'
import genericPerson from '../assets/images/generic_person.png'

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Manuel vermittelt in seinen Atemsitzungen viel Sicherheit und Klarheit. Er begleitet sanft und absolut wertfrei alle aufkommenden Gefühle und Zustände. Ich habe mich bei ihm jederzeit gut aufgehoben gefühlt.",
    author: "Manuela",
    role: "Atemtherapeutin und Klientin",
    image: manuelaHeadshot
  },
  {
    id: 2,
    text: "Präsent, klar und herzlich - Manuel gibt bewegende Atemsitzungen, die zu mehr innerer Ruhe und Klarheit führen.",
    author: "Judith",
    role: "Atemtherapeutenausbilderin",
    image: judithHeadshot
  },
  {
    id: 3,
    text: "Manu begleitet diesen Prozess mit großer Präsenz, Einfühlsamkeit und Klarheit. [...] Er schafft einen sicheren, wertschätzenden Raum, in dem alles willkommen ist, was sich zeigt – ohne Bewertung, dafür mit unterstützender und achtsamer Begleitung.",
    author: "Tobias",
    role: "Klient",
    image: genericPerson
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

  // Desktop: 3 cards with 2rem gap
  // Mobile: 1 card with padding
  const gapRem = 2

  let cardWidthCalc, transformCalc

  if (cardsToShow === 1) {
    // Mobile: single card, full width within padded container
    cardWidthCalc = '100%'
    transformCalc = `translateX(calc(-${currentIndex * 100}% - ${currentIndex * gapRem}rem))`
  } else {
    // Desktop: 3 cards
    const cardWidthPercent = 100 / cardsToShow
    const gapPerCard = (gapRem * (cardsToShow - 1)) / cardsToShow
    cardWidthCalc = `calc(${cardWidthPercent}% - ${gapPerCard}rem)`
    transformCalc = `translateX(calc(-${currentIndex * cardWidthPercent}% - ${currentIndex * (gapRem / cardsToShow)}rem))`
  }

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

      {/* Navigation Arrows - centered below testimonials on both mobile and desktop */}
      {testimonials.length > cardsToShow && (
        <>
          <button
            onClick={prevCard}
            disabled={currentIndex === 0}
            className="absolute left-1/2 bottom-0 -translate-x-20 translate-y-16 bg-white hover:bg-white text-primary p-2 rounded-full shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous card"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextCard}
            disabled={currentIndex >= maxIndex}
            className="absolute right-1/2 bottom-0 translate-x-20 translate-y-16 bg-white hover:bg-white text-primary p-2 rounded-full shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next card"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

export default TestimonialSlider
