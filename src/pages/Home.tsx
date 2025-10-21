import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ContactFormSection from '../components/ContactFormSection'
import AnimatedSection from '../components/ui/AnimatedSection'
import TestimonialSlider from '../components/TestimonialSlider'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="service-section">
        <div className="service-container">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title font-urbanist">
              Mein Angebot
            </h2>
          </AnimatedSection>

          <div className="service-grid-single">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="service-card">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/ffcb12ab-5771-4851-acc6-4ead7b70c14e/Manuela+Cosic+Atemtherapie"
                  alt="Integrative Atemtherapie"
                  className="service-image"
                />
                <h3 className="service-title font-urbanist">Integrative Atemtherapie</h3>
                <p className="service-description">
                  Mithilfe des Atems findest du auf sanfte Weise die Verbindung zu deinen tiefliegenden Gefühlen und kannst sie liebevoll integrieren. In der Atemtherapiesitzung schaffe ich dabei einen sicheren Raum und begleite dich unterstützend und einfühlsam in deinem individuellen Prozess.
                </p>
                <Link to="/atemtherapie" className="service-button">
                  mehr Informationen
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        className="quote-section"
        style={{
          backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/fef3decc-78d8-497e-b0e5-ecbc5897cae4/DSC_0117.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="quote-content relative z-10">
          <div className="quote-grid">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="quote-logo-wrapper">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/84059af2-a61a-40a9-a507-7692312e4825/0001_Manuela_Cosic_Yoga_Logo_Wei%C3%9F_CMYK.png"
                  alt="Leaf"
                  className="quote-logo"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in">
              <div className="quote-text-wrapper">
                <h3 className="quote-text font-urbanist">
                  "Deine Wahrheit ist dort, wo der Körper sich entspannt
                  und der Atem frei fließt."
                </h3>
                <p className="quote-author">Judith Hennemann</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="service-container">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title font-urbanist text-center text-white">
              Das sagen andere über meine Arbeit
            </h2>
          </AnimatedSection>
          
          <TestimonialSlider />
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />
    </>
  )
}

export default Home