// import { useState } from 'react'
import forest from "../assets/images/forest.jpg";
import ContactFormSection from "../components/ContactFormSection";
import FAQItem from "../components/FAQItem";
import { faqData } from "../data/faqData";
import "../styles/termine.scss";

/* COMMENTED OUT - Schedule Card component (not needed for appointment-based practice)
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
*/

const Termine = () => {
  /* COMMENTED OUT - Schedule cards from Manuela's website (not needed for Manuel's appointment-based practice)
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
  */


  return (
    <div className='termine-page'>
      {/* Hero Section with Background Image */}
      <section
        className='termine-hero'
        style={{
          backgroundImage: `url(${forest})`,
        }}
      >
        <div className='hero-overlay'></div>
      </section>

      {/* Main Content Section */}
      <section className='termine-content'>
        {/* Title Section */}
        <div className='termine-header'>
          <h1>Termine</h1>
        </div>

        {/* Availability Info */}
        <div className='trial-info'>
          <p>Nach Vereinbarung</p>
          <p>Kostenlose Erstgespräche telefonisch jederzeit vereinbar</p>
        </div>

        {/* COMMENTED OUT - Schedule Cards from Manuela's website (not needed for Manuel)
        <div className="schedule-container">
          {scheduleData.map((schedule, index) => (
            <ScheduleCard key={index} {...schedule} />
          ))}
        </div>
        */}
      </section>

      {/* FAQ Section with blue background */}
      <section className='termine-faq'>
        <div className='faq-container'>
          <h2>Integrative Atemtherapie</h2>
          <div className='faq-list'>
            {faqData.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />
    </div>
  );
};

export default Termine;
