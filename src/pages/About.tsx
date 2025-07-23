import AnimatedSection from '../components/ui/AnimatedSection'
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
              Hi ich bin Manu, Yogalehrerin,<br />
              integrative Atemtherapeutin &<br />
              Achtsamkeitstrainerin<br />
              in Köln und Pulheim.
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="about-hero-text">
              <p>
                Meine Leidenschaft ist es, Menschen zu berühren. Dies tue ich mit Händen, Worten, aber auch mit meiner eigenen Präsenz<br />
                und Aufmerksamkeit.
              </p>
              <p>
                Mein Ziel ist es, meine Schüler und Klienten soweit sicher zu begleiten, dass sie sich selbst wieder ein Stück näher kommen und wieder die Verbindung zu sich selbst bewusst spüren können.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content-section">
        <div className="about-container">
          <AnimatedSection animation="fade-up">
            <div className="about-content-grid">
              <div className="about-image-column">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/36a3d3f2-72cf-477d-b8c0-cf7f4df42beb/IMG-1113_Original.jpeg?format=750w"
                  alt="Manuela Cosic"
                  className="about-portrait"
                />
              </div>
              
              <div className="about-text-column">
                <h2 className="about-section-title">Über mich</h2>
                
                <p className="about-text">
                  Hallo, ich bin Manuela.
                </p>
                
                <p className="about-text">
                  Meine Leidenschaft für Yoga und Atemarbeit begleitet mich seit vielen Jahren. 
                  Nach meiner Ausbildung zur Yogalehrerin und integrativen Atemtherapeutin ist es 
                  mir eine Herzensangelegenheit, Menschen auf ihrem Weg zu mehr innerer Balance 
                  und Lebensfreude zu begleiten.
                </p>
                
                <p className="about-text">
                  In meinen Kursen und Einzelsitzungen schaffe ich einen sicheren Raum, in dem du 
                  dich fallen lassen und ganz bei dir ankommen kannst. Dabei ist es mir wichtig, 
                  individuell auf deine Bedürfnisse einzugehen und dich liebevoll in deinem 
                  persönlichen Prozess zu unterstützen.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

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