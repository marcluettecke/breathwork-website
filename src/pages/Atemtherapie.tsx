import { useState } from 'react'
import '../styles/atemtherapie.scss'

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
        <svg 
          className={`faq-chevron ${isOpen ? 'open' : ''}`}
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path 
            d="M6 9L12 15L18 9" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {answer && (
        <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
          <div className="faq-answer-content">
            {answer.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const Atemtherapie = () => {
  return (
    <>
      {/* Hero Section with flower image */}
      <section className="atemtherapie-hero">
        <div className="hero-content">
          <h1>„Atme tief ein, um deinen Geist nach Hause zu deinem Körper zu bringen."</h1>
          <p className="author">Thich Nhat Hanh</p>
          <div className="hero-description">
            <p>
              Dein Atem zeigt dir den Weg: nutze integrative Atemtherapie für deine 
              persönliche Entwicklung, mehr Klarheit und Lebendigkeit.
            </p>
            <p>
              Erlebe die heilsame Wirkung bewusster verbundener Atmung 
              und finde so den Zugang über Körper und Atem zu deinen 
              unbewussten Gefühls- und Verhaltensmustern.
            </p>
            <p>
              Finde auf diese Weise zurück zu mehr Selbstliebe, 
              Vertrauen und innerer Stärke.
            </p>
            <p>
              Meine therapeutische Begleitung in persönlichen 1:1 Sitzungen unterstützt 
              dich dabei, mithilfe des Atems Stress abzubauen, emotionale Blockaden 
              sanft zu lösen und wieder in Verbindung mit dir selbst zu kommen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="atemtherapie-content">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Integrative Atemtherapie</h2>
            
            <p>
              Der Atem ist eine der wenigen Körperfunktionen, welche sowohl bewusst 
              gesteuert werden können, als auch unbewusst ablaufen. Dein Atem 
              spiegelt deinen geistigen und emotionalen Zustand, gleichzeitig kannst du 
              umgekehrt über bestimmte Atemtechniken bewusst Einfluss auf deinen 
              inneren Zustand nehmen. Er ist deine unmittelbare Verbindung zu Körper, 
              Emotionen und Geist und ein wunderbares Werkzeug für den Zugang zu 
              unterbewussten Empfindungen und Glaubenssätzen.
            </p>

            <p>
              Die integrative Atemtherapie ist eine körperorientierte Therapiemethode 
              und wird von mir in 1:1 Sitzungen durchgeführt, tragend durch weitere 
              unterstützende Achtsamkeitstools, finden wir gemeinsam über deinen 
              Atem und deinen Körper die unterbewussten Muster und Blockaden und 
              lösen sie dabei Stück für Stück.
            </p>

            <p>
              Du kommst wieder mehr in Verbindung zu dir selbst, findest wieder 
              Leichtigkeit und Lebendigkeit, dein Nervensystem kann sich beruhigen, dein 
              Körper und dein Geist können sich entspannen.
            </p>

            <p>
              Aus eigener Erfahrung weiß ich, dass integrative Atemtherapie dir auch 
              helfen kann Erlebtes aus der Vergangenheit zu verarbeiten und dich neu 
              auszurichten.
            </p>

            <div className="themes-section">
              <p className="themes-intro">
                Alle Themen die dich beschäftigen, können Inhalt einer 
                integrativen Atemsitzung sein, beispielsweise:
              </p>
              <ul>
                <li>Stress & Anspannung</li>
                <li>Erschöpfung</li>
                <li>Überforderung</li>
                <li>Trauer</li>
                <li>Ängste und Sorgen</li>
                <li>Unerwünschte Verhaltens- und Beziehungsmuster</li>
                <li>Verarbeitung von traumatischen Erlebnissen</li>
                <li>Psychosomatische Beschwerden</li>
              </ul>
            </div>
          </div>

          <div className="image-content">
            <img 
              src="/images/atemtherapie/praxis-interior.jpeg" 
              alt="Praxis für integrative Atemtherapie"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="atemtherapie-faq">
        <div className="faq-container">
          <h2>Häufig gestellte Fragen</h2>
          
          <FAQItem 
            question="Was ist integrative Atemtherapie?"
            answer="Integrative Atemtherapie ist eine ganzheitliche und körperorientierte Therapiemethode, welche den bewussten Atem als Zugang zu körperlichen, emotionalen und mentalen Prozessen nutzt. 

Ziel ist es, festgefahrene Emotionen, alte Lebenserfahrungen oder Trauma zu erkennen, zu lösen und zu verarbeiten sowie das allgemeine Wohlbefinden und die Selbstregulation zu stärken. 

Integrative Atemtherapie richtet sich an alle, die entweder gezielt an inneren Themen arbeiten möchten oder sich persönliches Wachstum und mehr Lebensqualität wünschen."
          />
          
          <FAQItem 
            question="Wie läuft eine Atemsitzung ab?"
            answer=""
          />
          
          <FAQItem 
            question="Wie lange dauert eine Atemsitzung?"
            answer=""
          />
          
          <FAQItem 
            question="Wann finden die Termine statt?"
            answer=""
          />
          
          <FAQItem 
            question="Wo findet die Atemsitzung statt?"
            answer=""
          />
          
          <FAQItem 
            question="Was kostet eine Atemsitzung?"
            answer=""
          />
        </div>
      </section>
    </>
  )
}

export default Atemtherapie