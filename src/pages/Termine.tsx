import { useState } from 'react'
import FAQItem from '../components/FAQItem'
import ContactFormSection from '../components/ContactFormSection'
import '../styles/termine.scss'

interface ScheduleCardProps {
  title: string
  time: string
  location: string
  nextCourse?: string
  image: string
  expandedContent?: {
    address?: string[]
    price?: string
    details?: string
  }
}

const ScheduleCard = ({ title, time, location, nextCourse, image, expandedContent }: ScheduleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="schedule-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="time">{time || '\u00A0'}</p>
        <p className="location">{location}</p>
        <p className="next-course">{nextCourse ? `Nächster Kursstart: ${nextCourse}` : '\u00A0'}</p>
      </div>
      
      <button 
        className="info-button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span>Mehr Informationen</span>
        <span className={`plus-icon ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? '−' : '+'}
        </span>
      </button>

      <div className={`expanded-content ${isExpanded ? 'show' : ''}`}>
        {expandedContent?.address && (
          <div className="address-section">
            {expandedContent.address.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}
        {expandedContent?.price && (
          <div className="price-section">
            <p>{expandedContent.price}</p>
          </div>
        )}
        {expandedContent?.details && (
          <div className="details-section">
            <p>{expandedContent.details}</p>
          </div>
        )}
      </div>
    </div>
  )
}

const Termine = () => {
  const scheduleData: ScheduleCardProps[] = [
    {
      title: "Montags",
      time: "19:30 Uhr - 21:00 Uhr",
      location: "Familienzentrum Hand in Hand Pulheim",
      nextCourse: "13.10.25",
      image: "/termine-monday.jpg",
      expandedContent: {
        address: [
          "Hand in Hand e. V.",
          "Von-Bodelschwingh-Str. 25",
          "50259 Pulheim"
        ],
        price: "Preis für 10 Einheiten: 190€\nmax. Teilnehmerzahl: 12",
        details: "Bitte bringe deine Hilfsmittel wie Yogablock, Yogagurt etc. mit."
      }
    },
    {
      title: "Mittwochs",
      time: "19:45 Uhr - 21:15 Uhr",
      location: "Sunny Side Up Belgisches Viertel Köln",
      nextCourse: "24.9.25",
      image: "/termine-wednesday.jpg",
      expandedContent: {
        address: [
          "Sunny Side Up Studio",
          "Brüsseler Str. 24",
          "50674 Köln"
        ],
        price: "Preis für 10 Einheiten: 210€\nmax. Teilnehmerzahl: 10",
        details: "Der perfekte Ausgleich zur Wochenmitte. Fließende Bewegungen und bewusste Atmung für mehr Energie."
      }
    },
    {
      title: "Personal Yoga",
      time: "",
      location: "Individuell und nach Vereinbarung.",
      image: "/termine-personal.jpg",
      expandedContent: {
        price: "Einzelstunde: 75€\nDoppelstunde: 120€\n5er-Karte: 350€",
        details: "Maßgeschneiderte Yoga-Praxis, die sich ganz nach deinen Bedürfnissen richtet. Ob bei dir zu Hause, im Studio oder online – gemeinsam finden wir den perfekten Rahmen für deine persönliche Entwicklung."
      }
    }
  ]

  const faqData = [
    {
      question: "Was ist integrative Atemtherapie?",
      answer: "Integrative Atemtherapie ist eine ganzheitliche und körperorientierte Therapiemethode, welche den bewussten Atem als Zugang zu körperlichen, emotionalen und mentalen Prozessen nutzt.\n\nZiel ist es, festgefahrene Emotionen, alte Lebenserfahrungen oder Trauma zu erkennen, zu lösen und zu verarbeiten sowie das allgemeine Wohlbefinden und die Selbstregulation zu stärken.\n\nIntegrative Atemtherapie richtet sich an alle, die entweder gezielt an inneren Themen arbeiten möchten oder sich persönliches Wachstum und mehr Lebensqualität wünschen."
    },
    {
      question: "Wie läuft eine Atemsitzung ab?",
      answer: "Eine Atemsitzung findet immer 1:1 in einem persönlichen Setting statt. Jede Sitzung ist dabei sehr individuell und wird von mir achtsam und wertfrei begleitet.\n\nBei \"Atemanfängern\" führe ich eine sanfte Heranführung an den (verbundenen) Atem durch und wir schaffen zunächst gemeinsam einen sicheren Raum für dein Anliegen.\n\nSpätere Sitzungen laufen wie folgt ab:\nNach Klärung deines Anliegens leite ich dich durch Körper- und Atemübungen gezielt in einen entspannten Zustand.\nIm Anschluss folgt der kontinuierliche verbundene Atem. Hier zeigen sich oft emotionale oder körperliche Blockaden, welche wir gemeinsam sanft anschauen, annehmen und integrieren.\nAm Ende ist meist eine tiefe Entspannung spürbar, es wird oft eine innere Ruhe und Klarheit empfunden."
    },
    {
      question: "Wie lange dauert eine Atemsitzung?",
      answer: "Eine Atemsitzung dauert gewöhnlich 60-90 Minuten."
    },
    {
      question: "Wann finden die Termine statt?",
      answer: "Termine finden individuell nach Vereinbarung statt."
    },
    {
      question: "Wo findet die Atemsitzung statt?",
      answer: "Termine sind sowohl in Köln als auch in Pulheim buchbar.\n\nNach einer ersten Sitzung vor Ort, können weitere Termine auch online erfolgen.\n\nAtemsitzung in Köln – Belgisches Viertel\nZentrum für Wohlbefinden, Sunny Side Up\n\nAtemsitzung in Pulheim - Stommeln\nPure Pulheim\nJoseph-Gladbach-Platz 10"
    },
    {
      question: "Was kostet eine Atemsitzung?",
      answer: "In einem kostenlosen telefonischen Erstgespräch finden wir gemeinsam heraus, ob integrative Atemtherapie für dich geeignet ist. Ist das der Fall, machen wir einen persönlichen Termin aus.\n\n60 Minuten werden mit 80,00 € berechnet, bis zu 90 Minuten mit 120,00 €.\n\nTerminabsagen sind bis zu 48h vor dem jeweiligen Termin kostenfrei möglich. Bei späteren Absagen stelle ich ein Ausfallhonorar von 50,00€ in Rechnung."
    }
  ]

  return (
    <div className="termine-page">
      {/* Hero Section with Background Image */}
      <section className="termine-hero">
        <div className="hero-overlay"></div>
      </section>

      {/* Main Content Section */}
      <section className="termine-content">
        {/* Title Section */}
        <div className="termine-header">
          <h1>Termine</h1>
        </div>

        {/* Trial Info */}
        <div className="trial-info">
          <p>Eine Probestunde ist jederzeit möglich, sprich mich einfach an!</p>
        </div>

        {/* Schedule Cards */}
        <div className="schedule-container">
          {scheduleData.map((schedule, index) => (
            <ScheduleCard key={index} {...schedule} />
          ))}
        </div>
      </section>

      {/* FAQ Section with blue background */}
      <section className="termine-faq">
        <div className="faq-container">
          <h2>Integrative Atemtherapie</h2>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />
    </div>
  )
}

export default Termine