import { Link } from 'react-router-dom'
import AnimatedSection from './ui/AnimatedSection'
import CircularPortrait from './CircularPortrait'
import manuelHeadshot from '../assets/images/Manuel_headshot.jpg'

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
                src={manuelHeadshot}
                alt="Manuel Mechler"
                size="medium"
              />
            </div>
            <div>
              <h2 className="section-title font-urbanist text-left about-title">
                Über mich
              </h2>
              <p className="about-text">
                Schon in Jugendjahren war mir klar, dass ich gerne meine berufliche Heimat im sportlichen Bereich finden möchte, um meiner Leidenschaft für Bewegung nachzugehen. Durch den Leistungssport habe ich meinen Körper kennen und spüren gelernt und dadurch viele Erfahrungen sammeln können.
              </p>
              <p className="about-text">
                Deshalb habe ich an der Sporthochschule Köln das Studium zum Diplomsportwissenschaftler begonnen und auch erfolgreich abgeschlossen und anschließend meinen Abschluss im Fach Biologie absolviert. Seither arbeite ich als Lehrer an einer Berufsschule.
              </p>
              <p className="about-text">
                Meine Erfahrungen möchte ich dahingehend gerne weitergeben, um Menschen auf ihrem ganz individuellen Weg zu mehr Verbindung, Wachstum und Liebe zu sich und den Menschen in ihrem Umfeld zu begleiten.
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