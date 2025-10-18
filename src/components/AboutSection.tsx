import { Link } from 'react-router-dom'
import AnimatedSection from './ui/AnimatedSection'
import CircularPortrait from './CircularPortrait'

interface AboutSectionProps {
  showButton?: boolean
  buttonText?: string
  buttonLink?: string
}

const AboutSection = ({ 
  showButton = true, 
  buttonText = "Erfahre mehr", 
  buttonLink = "/about" 
}: AboutSectionProps) => {
  return (
    <section className="about-section">
      <div className="service-container">
        <AnimatedSection animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <CircularPortrait
                src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/ae8fefc8-b8c2-4d6e-a3ee-412e9f6e736a/Manuela+Cosic+Yoga+und+Atem"
                alt="Manuela Cosic"
                size="medium"
              />
            </div>
            <div>
              <h2 className="section-title font-urbanist text-left about-title">
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
              {showButton && (
                <Link to={buttonLink} className="service-button">
                  {buttonText}
                </Link>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default AboutSection