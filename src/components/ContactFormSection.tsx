import ContactForm from './ContactForm'
import AnimatedSection from './ui/AnimatedSection'
import therapyImage from '../assets/images/Manuel_during_therapy.jpg'
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
                  src={therapyImage}
                  alt="DurchAtmen Atemtherapie in Köln"
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