import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Text from '../components/ui/Text'
import Button from '../components/ui/Button'
import { EventProps } from '../models'

const EventCard = ({ title, date, time, location, description, price }: EventProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <Heading level={4} className="text-primary mb-3">{title}</Heading>
      <div className="space-y-2 mb-4 text-sm text-gray-600">
        <p>📅 {date}</p>
        <p>🕐 {time}</p>
        <p>📍 {location}</p>
        <p>💶 {price}</p>
      </div>
      <Text className="mb-4">{description}</Text>
      <Button as="link" to="/kontakt" size="sm">
        Anmelden
      </Button>
    </div>
  )
}

const Termine = () => {
  const upcomingEvents = [
    {
      title: "Yoga & Atem Workshop",
      date: "Samstag, 15. Februar 2025",
      time: "14:00 - 17:00 Uhr",
      location: "Köln-Nippes",
      description: "Ein intensiver Workshop, der Yoga und bewusste Atmung verbindet. Perfekt für alle, die tiefer in ihre Praxis eintauchen möchten.",
      price: "65€",
    },
    {
      title: "Atemreise - Gruppenession",
      date: "Sonntag, 23. Februar 2025",
      time: "10:00 - 12:00 Uhr",
      location: "Pulheim",
      description: "Gemeinsam atmen, loslassen und neue Kraft schöpfen. Eine transformative Erfahrung in der Gruppe.",
      price: "35€",
    },
    {
      title: "Frühlingsretreat",
      date: "21. - 23. März 2025",
      time: "Freitag bis Sonntag",
      location: "Eifel",
      description: "Ein Wochenende voller Yoga, Atemarbeit und Naturverbindung. Komm zur Ruhe und tanke neue Energie.",
      price: "350€",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gray-50">
        <Container>
          <Heading level={1} className="text-primary mb-6 text-center">Termine & Workshops</Heading>
          <Text className="text-center text-lg max-w-2xl mx-auto">
            Entdecke meine aktuellen Kurse, Workshops und besondere Events. 
            Ich freue mich darauf, dich auf deinem Weg zu begleiten.
          </Text>
        </Container>
      </Section>

      {/* Regular Classes Section */}
      <Section className="py-20">
        <Container>
          <Heading level={2} className="text-primary mb-12 text-center">Regelmäßige Kurse</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-light/10 rounded-lg p-8">
              <Heading level={3} className="text-primary mb-4">Vinyasa Yoga</Heading>
              <div className="space-y-2 mb-4">
                <Text><strong>Montags:</strong> 18:30 - 20:00 Uhr</Text>
                <Text><strong>Mittwochs:</strong> 9:00 - 10:30 Uhr</Text>
                <Text><strong>Ort:</strong> Köln-Nippes</Text>
              </div>
              <Button as="link" to="/yoga" variant="primary" size="sm">
                Mehr erfahren
              </Button>
            </div>
            
            <div className="bg-primary-light/10 rounded-lg p-8">
              <Heading level={3} className="text-primary mb-4">Atemtherapie</Heading>
              <div className="space-y-2 mb-4">
                <Text><strong>Einzelsitzungen</strong></Text>
                <Text>Termine nach Vereinbarung</Text>
                <Text><strong>Ort:</strong> Köln-Nippes oder bei dir</Text>
              </div>
              <Button as="link" to="/atemtherapie" variant="primary" size="sm">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Upcoming Events Section */}
      <Section className="py-20 bg-gray-50">
        <Container>
          <Heading level={2} className="text-primary mb-12 text-center">Kommende Veranstaltungen</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Text className="mb-4">
              Möchtest du über neue Termine informiert werden?
            </Text>
            <Button as="link" to="/kontakt">
              Newsletter abonnieren
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Termine