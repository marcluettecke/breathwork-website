import AnimatedSection from '../components/ui/AnimatedSection'
import AboutDetailSection from '../components/AboutDetailSection'
import './About.scss'

const About = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="about-hero"
        style={{
          backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/4c46a8f2-911d-4dcc-8c1a-f7e8c1c7d08b/yellow-blooming-flowering-plant.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <AnimatedSection animation="fade-up">
            <h1 className="about-hero-title">
              Über mich
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="about-hero-text">
              <p>
                Schon in Jugendjahren war mir klar, dass ich gerne meine berufliche Heimat im sportlichen Bereich finden möchte, um meiner Leidenschaft für Bewegung nachzugehen.
              </p>
              <p>
                Durch den Leistungssport habe ich meinen Körper kennen und spüren gelernt und dadurch viele Erfahrungen sammeln können.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Detail Section */}
      <AboutDetailSection />

      {/* Qualifications Section */}
      <section className="qualifications-section">
        <div className="about-container">
          <AnimatedSection animation="fade-up">
            <h2 className="section-title text-center">Qualifikationen</h2>
          </AnimatedSection>
          
          <div className="qualifications-grid">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="qualification-column">
                <h3 className="qualification-title">Ausbildungen</h3>
                <ul className="qualification-list">
                  <li>200h Vinyasa Yoga Teacher Training</li>
                  <li>Integrative Atemtherapie Ausbildung</li>
                  <li>Fortbildung in Traumasensitivem Yoga</li>
                  <li>Weiterbildung in Yin Yoga</li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="qualification-column">
                <h3 className="qualification-title">Erfahrung</h3>
                <ul className="qualification-list">
                  <li>Über 5 Jahre Unterrichtserfahrung</li>
                  <li>Regelmäßige Workshops und Retreats</li>
                  <li>Einzelbegleitung in Atemtherapie</li>
                  <li>Kontinuierliche Weiterbildung</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="about-container">
          <AnimatedSection animation="fade-up">
            <div className="philosophy-content">
              <h2 className="section-title text-center">Meine Philosophie</h2>
              
              <div className="philosophy-quote">
                "Dein Körper und dein Atem spiegeln den Zustand deines Geistes und deiner Seele. 
                Komm wieder in Verbindung zu dir selbst."
              </div>
              
              <p className="philosophy-text">
                Diese Worte leiten meine Arbeit. Ich glaube daran, dass in jedem von uns die 
                Kraft zur Heilung und Transformation liegt. Meine Aufgabe sehe ich darin, dich 
                dabei zu unterstützen, diese innere Weisheit zu entdecken und zu entfalten.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

export default About