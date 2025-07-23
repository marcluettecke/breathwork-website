import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import Text from '../components/ui/Text'
import ContactForm from '../components/ContactForm'

const Kontakt = () => {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gray-50">
        <Container>
          <Heading level={1} className="text-primary mb-6 text-center">Kontakt</Heading>
          <Text className="text-center text-lg max-w-2xl mx-auto">
            Ich freue mich von dir zu hören! Nimm gerne Kontakt auf für Fragen, 
            Anmeldungen oder ein unverbindliches Erstgespräch.
          </Text>
        </Container>
      </Section>

      {/* Contact Info & Form Section */}
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <Heading level={2} className="text-primary mb-8">Kontaktinformationen</Heading>
              
              <div className="space-y-6">
                <div>
                  <Heading level={4} className="text-primary mb-2">E-Mail</Heading>
                  <a 
                    href="mailto:info@manuelacosic.de" 
                    className="text-lg hover:text-primary-dark transition-colors"
                  >
                    info@manuelacosic.de
                  </a>
                </div>
                
                <div>
                  <Heading level={4} className="text-primary mb-2">Telefon</Heading>
                  <a 
                    href="tel:+4915129128644" 
                    className="text-lg hover:text-primary-dark transition-colors"
                  >
                    +49 1512 9128644
                  </a>
                </div>
                
                <div>
                  <Heading level={4} className="text-primary mb-2">Standorte</Heading>
                  <Text>Köln-Nippes</Text>
                  <Text>Pulheim</Text>
                </div>
                
                <div>
                  <Heading level={4} className="text-primary mb-2">Erreichbarkeit</Heading>
                  <Text>
                    Montag - Freitag: 9:00 - 18:00 Uhr<br />
                    Wochenende: Nach Vereinbarung
                  </Text>
                </div>
              </div>
              
              <div className="mt-12">
                <Heading level={4} className="text-primary mb-4">Folge mir</Heading>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Heading level={2} className="text-primary mb-8">Nachricht senden</Heading>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center">
          <Text className="text-gray-600">Karte Platzhalter</Text>
        </div>
      </Section>
    </>
  )
}

export default Kontakt