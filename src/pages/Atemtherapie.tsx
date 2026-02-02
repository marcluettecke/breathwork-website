import mountainLandscape from "../assets/images/mountain_landscape.jpg";
import officeImage from "../assets/images/Manuel_solo.jpeg";
import FAQItem from "../components/FAQItem";
import { faqData } from "../data/faqData";
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
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Atemtherapie;
