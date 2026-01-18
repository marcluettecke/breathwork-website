import ContactForm from '../components/ContactForm'
import fieldImage from '../assets/images/field.jpg'
import './Kontakt.scss'

const Kontakt = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="kontakt-hero"
        style={{
          backgroundImage: `url(${fieldImage})`,
        }}
      />

      {/* Contact Form Section */}
      <section className="kontakt-section">
        <div className="kontakt-container">
          <div className="kontakt-grid">
            {/* Left Column - Heading and Description */}
            <div className="kontakt-info">
              <h2 className="kontakt-title font-urbanist">Kontaktformular</h2>

              <div className="kontakt-description">
                <p>
                  Du interessierst dich für Atemtherapie oder möchtest einen Termin für eine individuelle Atemsitzung vereinbaren?
                </p>
                <p>
                  Schreib mir gerne - ich freue mich auf deine Nachricht.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="kontakt-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Kontakt
