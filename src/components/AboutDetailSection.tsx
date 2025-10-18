import AnimatedSection from './ui/AnimatedSection'
import CircularPortrait from './CircularPortrait'
import './AboutDetailSection.scss'

const AboutDetailSection = () => {
  return (
    <section className="about-detail-section">
      <div className="about-detail-container">
        <AnimatedSection animation="fade-up">
          <div className="about-detail-grid">
            <div className="about-detail-text-column">
              <p className="about-detail-text">
                So habe ich mich vor über 20 Jahren selbst auf den Weg gemacht. Zunächst habe ich Yoga als "Weg aus dem Kopf - rein in den Körper" entdeckt. Nach einem langen Büroalltag in meinem stressigen Marketingjob war der abendliche Yogakurs mein perfekter Ausgleich – sowohl für den angespannten Körper, als auch für den aufgedrehten Geist. Um diese Erfahrung auch an andere weitergeben zu können, habe ich 2010 die Ausbildung zur Vinyasa Yogalehrerin abgeschlossen und unterrichte seitdem mit viel Herz und Leidenschaft.
              </p>
              
              <p className="about-detail-text">
                Nach dem plötzlichen Tod meiner Mutter im Jahr 2019, der darauffolgenden Pandemie, zu Hause mit zwei Kleinkindern, und der gleichzeitigen schweren Erkrankung und dem Verlust meines Vaters in 2021, merkte ich, dass die mir bis dahin zur Verfügung stehenden Tools in dieser Ausnahmesituation nicht ausreichten.
              </p>
              
              <p className="about-detail-text">
                Ich entdeckte die integrative Atemtherapie als Möglichkeit, mit Akzeptanz auf meine tiefsten Gefühle zu blicken, diesen sanft und liebevoll zu begegnen und sie dann endlich loszulassen. Diese Erfahrung war für mich so nachhaltig, dass ich mich dazu entschloss den Dingen auf den Grund zu gehen und die 3-jährige Ausbildung zur integrativen Atemtherapeutin und Achtsamkeitstrainerin zu absolvieren.
              </p>
              
              <p className="about-detail-text">
                Seitdem begleite ich Menschen dabei, sich selbst auf allen Ebenen wieder bewusst zu begegnen – sei es physisch, mental oder emotional. Nach meiner Arbeit in entspannte und lächelnde Gesichter zu blicken ist dabei das größte Geschenk für mich!
              </p>
            </div>
            
            <div className="about-detail-image-column">
              <CircularPortrait
                src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/ae8fefc8-b8c2-4d6e-a3ee-412e9f6e736a/Manuela+Cosic+Yoga+und+Atem"
                alt="Manuela Cosic"
                size="large"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default AboutDetailSection