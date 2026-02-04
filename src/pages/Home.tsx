import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ContactFormSection from '../components/ContactFormSection'
import AnimatedSection from '../components/ui/AnimatedSection'
import TestimonialSlider from '../components/TestimonialSlider'
import AboutSection from '../components/AboutSection'
import therapyImage from '../assets/images/Manuel_solo.jpeg'

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
                  src={therapyImage}
                  alt="Integrative Atemtherapie"
                  className="service-image"
                />
                <h3 className="service-title font-urbanist">Integrative Atemtherapie</h3>
                <p className="service-description">
                  Die Integrative Atemtherapie ist ein humanistisches, körperorientiertes Verfahren, das durch bewusstes, verbundenes Atmen emotionale Blockaden, Traumata und Stress löst. Sie verbindet Atemtechniken mit Gesprächstherapie, um Körper, Psyche und Geist zu harmonisieren. Ziel ist es, tiefsitzende Muster aufzulösen, das Nervensystem zu regulieren und das körperliche sowie seelische Wohlbefinden zu steigern.
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
      <section className="quote-section">
        <div className="quote-content relative z-10">
          <div className="quote-grid">
            {/* COMMENTED OUT - Manuela's logo (removed for Manuel's site)
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="quote-logo-wrapper">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/84059af2-a61a-40a9-a507-7692312e4825/0001_Manuela_Cosic_Yoga_Logo_Wei%C3%9F_CMYK.png"
                  alt="Leaf"
                  className="quote-logo"
                />
              </div>
            </AnimatedSection>
            */}
            <AnimatedSection animation="fade-in">
              <div className="quote-text-wrapper">
                <h3 className="quote-text font-urbanist">
                  "Was wir tun, ist wichtig - aber warum wir es tun ist alles"
                </h3>
                <p className="quote-author">Simon Sinek</p>
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