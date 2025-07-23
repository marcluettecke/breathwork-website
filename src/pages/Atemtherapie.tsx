import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Text from '../components/ui/Text'
import ContactForm from '../components/ContactForm'

const Atemtherapie = () => {
  return (
    <>
      {/* Hero Section */}
      <Section 
        className="pt-32 pb-20 min-h-[50vh] flex items-center"
        backgroundImage="/images/breath-hero.jpg"
        overlay
      >
        <Container className="text-white">
          <Heading level={1} className="mb-6">
            „Atme tief ein, um deinen Geist nach Hause zu deinem Körper zu bringen."
          </Heading>
          <Text className="text-white/80">Thich Nhat Hanh</Text>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="py-20">
        <Container maxWidth="4xl">
          <Heading level={3} className="text-primary mb-8">Integrative Atemtherapie</Heading>
          
          <Text className="mb-6">
            Dein Atem zeigt dir den Weg: nutze integrative Atemtherapie für deine persönliche Entwicklung, mehr Klarheit und Lebendigkeit.
          </Text>
          
          <Text className="mb-6">
            Erlebe die heilsame Wirkung bewusster verbundener Atmung und finde so den Zugang über Körper und Atem zu deinen unbewussten Gefühls- und Verhaltensmustern.
          </Text>
          
          <Text className="mb-12">
            Finde auf diese Weise zurück zu mehr Selbstliebe, Vertrauen und innerer Stärke.
          </Text>
          
          <Text className="mb-12">
            Meine therapeutische Begleitung unterstützt dich dabei, mithilfe des Atems Stress abzubauen, emotionale Blockaden sanft zu lösen und wieder in Verbindung mit dir selbst zu kommen.
          </Text>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20 bg-primary-light text-white">
        <Container maxWidth="4xl">
          <Heading level={3} className="text-white mb-12">Allgemeines</Heading>
          
          <div className="space-y-8">
            <div>
              <Heading level={4} className="text-white mb-3">Wie lange dauert eine Atemsitzung?</Heading>
              <Text className="text-white/90">
                Eine Einzelsitzung dauert in der Regel 90-120 Minuten.
              </Text>
            </div>
            
            <div>
              <Heading level={4} className="text-white mb-3">Wann finden die Termine statt?</Heading>
              <Text className="text-white/90">
                Die Termine werden individuell vereinbart.
              </Text>
            </div>
            
            <div>
              <Heading level={4} className="text-white mb-3">Wo findet die Atemsitzung statt?</Heading>
              <Text className="text-white/90">
                In meinem Praxisraum in Köln-Nippes oder bei dir zu Hause.
              </Text>
            </div>
            
            <div>
              <Heading level={4} className="text-white mb-3">Was kostet eine Atemsitzung?</Heading>
              <Text className="text-white/90">
                90€ pro Sitzung
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section className="py-20">
        <Container>
          <Heading level={3} className="text-primary text-center mb-12">Kontaktformular</Heading>
          <ContactForm />
        </Container>
      </Section>
    </>
  )
}

export default Atemtherapie