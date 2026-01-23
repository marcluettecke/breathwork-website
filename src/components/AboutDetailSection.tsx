import manuelHeadshot from "../assets/images/Manuel_headshot.jpeg";
import "./AboutDetailSection.scss";
import CircularPortrait from "./CircularPortrait";
import AnimatedSection from "./ui/AnimatedSection";

const AboutDetailSection = () => {
  return (
    <section className='about-detail-section'>
      <div className='about-detail-container'>
        <AnimatedSection animation='fade-up'>
          <div className='about-detail-grid'>
            <div className='about-detail-text-column'>
              <p className='about-detail-text'>
                Der Leistungssport insbesondere ermöglichte mir sehr intensive
                körperliche Erfahrungen und lange habe ich mich auch über das
                Gewinnen und Verlieren definiert und mir immer wieder sportlich
                herausfordernde Ziele gesetzt, um mich durch diese Erfahrungen
                zu spüren. Dafür war und bin ich sehr dankbar. Dennoch habe ich
                realisiert, dass ich so nicht weitermachen kann und möchte.
              </p>

              <p className='about-detail-text'>
                Mir wurde nach und nach klar, dass ich nicht nur im Außen nach
                Wachstum suchen möchte, sondern den Blick nach Innen richten
                kann, um mehr Verbindung zu mir und meinen Gefühlen zu erlangen.
              </p>

              <p className='about-detail-text'>
                Durch meine damaligen Nachbarn kam ich zur integrativen
                Atemtherapie nach Judith Hennemann. Glücklicherweise konnte ich
                dadurch meinen persönlichen Werkzeugkasten in der eigenen
                Bewusstseinsarbeit erweitern, was mir als Vater eines Sohnes,
                als Freund und Partner aber auch auf beruflicher Ebene sehr
                geholfen hat, nicht nur meine Perspektive zu sehen, sondern auch
                die meiner Mitmenschen zu erkennen und dadurch das eigene
                Handeln auszurichten.
              </p>

              <p className='about-detail-text'>
                Meine Erfahrungen möchte ich dahingehend gerne weitergeben, um
                Menschen auf ihrem ganz individuellen Weg zu mehr Verbindung,
                Wachstum und Liebe zu sich und den Menschen in ihrem Umfeld zu
                begleiten.
              </p>
            </div>

            <div className='about-detail-image-column'>
              <CircularPortrait
                src={manuelHeadshot}
                alt='Manuel Mechler'
                size='large'
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutDetailSection;
