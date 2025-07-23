import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'
import AnimatedSection from '../components/ui/AnimatedSection'
import TestimonialSlider from '../components/TestimonialSlider'

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
          
          <div className="service-grid">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="service-card">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/b7e3cc96-0fc7-4b42-a5d6-fec90d21bc13/Bild_2024-10-12_104905669-removebg-preview.png?format=500w"
                  alt="Yoga"
                  className="service-image"
                />
                <h3 className="service-title font-urbanist">Yoga</h3>
                <p className="service-description">
                  Vinyasa Yoga in persönlicher Atmosphäre: durch das Üben in kleinen Gruppen kann ich dich individuell assistieren und auf deine Bedürfnisse eingehen. Du kommst in deine Kraft und gleichzeitig findest du körperliche & geistige Ruhe.
                </p>
                <Link to="/yoga" className="service-button">
                  mehr Informationen
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="service-card">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/5b00b5e3-3bb6-4a70-9ee7-b5da00b99be0/Bild_2024-10-12_105301838-removebg-preview.png?format=500w"
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
          <AnimatedSection animation="fade-in">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/715cb0b7-5569-4f51-8f1a-2824765c9c35/Kein+Titel+%28150+x+40+cm%29+%281%29.png?format=300w"
                alt="Leaf"
                className="h-[150px] opacity-60"
              />
            </div>
            <h2 className="quote-text font-urbanist">
              "Deine Wahrheit ist dort, wo der Körper sich entspannt<br />
              und der Atem frei fließt."
            </h2>
            <p className="quote-author">Judith Hennemann</p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="service-container">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/36a3d3f2-72cf-477d-b8c0-cf7f4df42beb/IMG-1113_Original.jpeg?format=750w"
                  alt="Manuela Cosic"
                  className="about-image mx-auto"
                />
              </div>
              <div>
                <h2 className="section-title font-urbanist text-left">
                  Über mich
                </h2>
                <p className="about-text">
                  Ich bin Manuela, Yoga Lehrerin, integrative Atemtherapeutin und Achtsamkeitstrainerin.
                </p>
                <p className="about-text">
                  Meine Leidenschaft ist es, Menschen zu berühren. Dies tue ich mit Händen, Worten, aber auch mit meiner eigenen Präsenz und Aufmerksamkeit.
                </p>
                <p className="about-text">
                  Mein Ziel ist es, meine Schüler und Klienten soweit sicher zu begleiten, dass sie sich selbst wieder ein Stück näher kommen und wieder die Verbindung zu sich selbst spüren können.
                </p>
                <Link to="/about" className="service-button">
                  Erfahre mehr
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

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
      <section className="contact-section">
        <div className="form-container">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title font-urbanist text-center">Kontaktformular</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default Home