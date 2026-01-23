import mountainLandscape from "../assets/images/mountain_landscape.jpg";
import officeImage from "../assets/images/Manuel_solo.jpeg";
import FAQItem from "../components/FAQItem";
import "../styles/atemtherapie.scss";

const Atemtherapie = () => {
  return (
    <>
      {/* Hero Section with mountain landscape */}
      <section
        className='atemtherapie-hero'
        style={{
          backgroundImage: `url(${mountainLandscape})`,
        }}
      >
        <div className='hero-content'>
          <h1>Was macht eine Atemsitzung aus?</h1>
          <div className='hero-description'>
            <h2>DurchAtmen – Integrative Atemtherapie mit Tiefe</h2>
            <p>
              In meiner Arbeit mit DurchAtmen verbinde ich den verbundenen Atem
              mit einem ganzheitlichen Blick auf den Menschen. Verbunden Atmen
              bedeutet, dass die Atempausen nach der Ein- und Ausatmung
              ausbleiben und du somit verbunden atmest. Diese Atemtechnik ist
              grundlegend für die Integrative Atemtherapie und bietet einen
              tiefen Zugang zu körperlichen, seelischen und geistigen Prozessen
              – durch das bewusste Erleben des eigenen Atems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className='atemtherapie-content'>
        <div className='content-wrapper'>
          <div className='text-content'>
            <h2>Wann DurchAtmen helfen kann</h2>

            <p>
              Grundsätzlich ist unsere Art zu atmen ein indirekter Zugang zum
              autonomen Nervensystem und eröffnet uns somit Möglichkeiten darauf
              je nach Bedarf einzuwirken. Möchtest du mehr darüber erfahren,
              welche Veränderung eine verlängerte Einatmung oder Ausatmung, eine
              tiefe Bauchatmung zu flacher Brustatmung, oder grundsätzlich die
              Nasenatmung zur Mundatmung bewirkt, besuch mich gerne und ich
              begleite dich auf deiner Reise.
            </p>

            <p>
              Die Atemarbeit eignet sich besonders bei Beschwerden, die den
              Körper spürbar einbeziehen – sei es durch Überlastung, Erschöpfung
              oder durch das Gefühl, den Zugang zum eigenen Empfinden und den
              Gefühlen verloren zu haben.
            </p>

            <div className='themes-section'>
              <p className='themes-intro'>Anwendungsbereiche:</p>
              <ul>
                <li>Akute Belastungs- und Krisensituationen</li>
                <li>
                  Anpassungsschwierigkeiten nach tiefgreifenden
                  Lebensveränderungen
                </li>
                <li>
                  Körperliche Symptome ohne klare medizinische Ursache
                  (somatoforme Beschwerden)
                </li>
                <li>Ängste, innere Unruhe, Erschöpfung oder Burnout</li>
                <li>
                  kann in sportlich und beruflich herausfordernden Situationen
                  sehr hilfreich sein mehr Ruhe und Konzentration zu finden
                </li>
              </ul>
            </div>

            <div className='themes-section'>
              <p className='themes-intro'>
                Begleitend hilfreich mit anderen therapeutischen Verfahren bei:
              </p>
              <ul>
                <li>
                  Leichten bis mittelschweren Depressionen (als Ergänzung zu
                  anderen therapeutischen Verfahren)
                </li>
                <li>Innerer Leere, Antriebslosigkeit, emotionaler Rückzug</li>
                <li>
                  Schicksalsschlägen, Trennungen, chronischen oder onkologischen
                  Erkrankungen
                </li>
                <li>Schlafstörungen</li>
                <li>
                  Nervosität bei beruflichen Herausforderungen (im
                  Leistungssport, bei Musikern oder Moderatoren)
                </li>
              </ul>
            </div>
          </div>

          <div className='image-content'>
            <img src={officeImage} alt='Praxisraum DurchAtmen' />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='atemtherapie-faq'>
        <div className='faq-container'>
          <h2>Häufig gestellte Fragen</h2>

          <FAQItem
            question='Was ist integrative Atemtherapie?'
            answer='Integrative Atemtherapie ist eine ganzheitliche und körperorientierte Therapiemethode, welche den bewussten Atem als Zugang zu körperlichen, emotionalen und mentalen Prozessen nutzt. 

Ziel ist es, festgefahrene Emotionen, alte Lebenserfahrungen oder Trauma zu erkennen, zu lösen und zu verarbeiten sowie das allgemeine Wohlbefinden und die Selbstregulation zu stärken. 

Integrative Atemtherapie richtet sich an alle, die entweder gezielt an inneren Themen arbeiten möchten oder sich persönliches Wachstum und mehr Lebensqualität wünschen.'
          />

          <FAQItem
            question='Wie läuft eine Atemsitzung ab?'
            answer="Eine Atemsitzung findet immer 1:1 in einem persönlichen Setting statt. Jede Sitzung ist dabei sehr individuell und wird von mir achtsam und wertfrei begleitet.

Bei 'Atemanfängern' führe ich eine sanfte Heranführung an den (verbundenen) Atem durch und wir schaffen zunächst gemeinsam einen sicheren Raum für dein Anliegen.

Spätere Sitzungen laufen wie folgt ab:
Nach Klärung deines Anliegens leite ich dich durch Körper- und Atemübungen gezielt in einen entspannten Zustand.
Im Anschluss folgt der kontinuierliche verbundene Atem. Hier zeigen sich oft emotionale oder körperliche Blockaden, welche wir gemeinsam sanft anschauen, annehmen und integrieren.
Am Ende ist meist eine tiefe Entspannung spürbar, es wird oft eine innere Ruhe und Klarheit empfunden."
          />

          <FAQItem
            question='Wie lange dauert eine Atemsitzung?'
            answer='Eine Atemsitzung dauert gewöhnlich 60-90 Minuten.'
          />

          <FAQItem
            question='Wann finden die Termine statt?'
            answer='Termine finden individuell nach Vereinbarung statt.'
          />

          <FAQItem
            question='Wo findet die Atemsitzung statt?'
            answer='Mein Praxisraum steht in der Rolandstr. 61, 50677 Köln nach terminlicher Vereinbarung offen für dich.'
          />

          <FAQItem
            question='Was kostet eine Atemsitzung?'
            answer='In einem kostenlosen telefonischen Erstgespräch finden wir gemeinsam heraus, ob integrative Atemtherapie für dich geeignet ist. Ist das der Fall, machen wir einen persönlichen Termin aus.

60 Minuten werden mit 80,00 € berechnet, bis zu 90 Minuten mit 100,00 €.

Terminabsagen sind bis zu 48h vor dem jeweiligen Termin kostenfrei möglich. Bei späteren Absagen stelle ich ein Ausfallhonorar von 50,00€ in Rechnung.'
          />
        </div>
      </section>
    </>
  );
};

export default Atemtherapie;
