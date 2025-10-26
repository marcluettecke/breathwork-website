import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item">
      <button 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`faq-toggle ${isOpen ? 'open' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div className="faq-answer-content">
          {answer ? (
            answer.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>Inhalt folgt in Kürze.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default FAQItem