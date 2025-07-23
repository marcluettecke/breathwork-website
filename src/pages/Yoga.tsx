import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Text from '../components/ui/Text'

const Yoga = () => {
  return (
    <>
      {/* Hero Section */}
      <Section 
        className="pt-32 pb-20 min-h-[50vh] flex items-center"
        backgroundImage="https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
        overlay
      >
        <Container className="text-white">
          <Heading level={1} className="mb-6">
            „Entspannung beginnt in den äußeren Schichten des Körpers und dringt bis in die tiefen Schichten unserer Existenz vor."
          </Heading>
          <Text className="text-white/80">B.K.S. Iyengar</Text>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="py-20">
        <Container maxWidth="4xl">
          <Text size="lg" className="mb-8">
            Übe Yoga in einer kleinen Gruppe für mehr Ruhe, Kraft und innere Balance.
          </Text>
          
          <Text className="mb-6">
            Yoga bedeutet übersetzt "Verbindung" - von Bewegung und Atmung, von Körper und Geist und für mich vor allem auch die Verbindung zu sich selbst.
          </Text>
          
          <Text className="mb-12">
            Gönne dir selbst eine Auszeit im Hier und Jetzt um deinen Körper bewusst zu spüren und dein inneres Gedankenkarussell zur Ruhe zu bringen.
          </Text>
          
          <div className="space-y-8">
            <div>
              <Heading level={3} className="text-primary mb-4">Kurszeiten</Heading>
              <Text>Montags 18:30 - 20:00 Uhr</Text>
              <Text>Mittwochs 9:00 - 10:30 Uhr</Text>
            </div>
            
            <div>
              <Heading level={3} className="text-primary mb-4">Ort</Heading>
              <Text>Köln-Nippes oder Pulheim</Text>
            </div>
            
            <div>
              <Heading level={3} className="text-primary mb-4">Preise</Heading>
              <Text>10er Karte: 150€</Text>
              <Text>Einzelstunde: 18€</Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Yoga