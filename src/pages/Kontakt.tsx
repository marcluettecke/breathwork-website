import ContactForm from '../components/ContactForm'
import './Kontakt.scss'

const Kontakt = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section
        className="kontakt-hero"
        style={{
          backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/9f2fca9d-fb66-4fde-a5d9-8a2e23102f2b/20250216_DSC05567.jpg")',
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
                  Du hast Fragen zu meinen Yoga Kursen oder möchtest dich direkt anmelden?
                </p>
                <p>
                  Du interessierst dich für Atemtherapie oder möchtest einen Termin für eine individuelle Atemsitzung vereinbaren? Schreib mir gerne - ich freue mich auf deine Nachricht.
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
