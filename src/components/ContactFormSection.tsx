import ContactForm from './ContactForm'
import AnimatedSection from './ui/AnimatedSection'
import './ContactFormSection.scss'

interface ContactFormSectionProps {
  showImage?: boolean
}

const ContactFormSection = ({ showImage = true }: ContactFormSectionProps) => {
  return (
    <section className="contact-form-section">
      <div className="contact-container">
        <AnimatedSection animation="fade-up">
          <h2 className="section-title">Kontaktformular</h2>
        </AnimatedSection>
        <div className="contact-grid">
          {showImage && (
            <AnimatedSection animation="fade-up" delay={200} className="contact-image-column">
              <div className="contact-image-wrapper">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/ddb74dc7-f81f-4a13-b849-401c8a3a046c/20250216_DSC05929.jpg"
                  alt="Manuela Cosic Yogastunden in Köln und Pulheim"
                  className="contact-image"
                />
              </div>
            </AnimatedSection>
          )}
          <div className="form-column">
            <AnimatedSection animation="fade-up" delay={300}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection