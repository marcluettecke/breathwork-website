import "./Hero.scss";
import heroBg from '../assets/images/green_plant.jpg';

const Hero = () => {
  return (
    <section
      className='hero-section'
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='absolute inset-0 bg-black/40' />

      <div className='relative z-10 w-full hero-content-wrapper'>
        <div className='hero-content'>
          <h1 className='hero-title font-urbanist'>
            DurchAtmen – dein Weg zu mehr Klarheit und innerer Ruhe
          </h1>

          <div className='hero-text-wrapper'>
            <p className='hero-text'>
              Du bist mehr als du denkst; dein Atem kann die Basis sein, eine kraftvolle Verbindung deiner körperlichen zu deiner geistigen Ebene zu spüren.
            </p>
            <p className='hero-text'>
              Denkt es sich nur „gut" an oder fühlt es sich auch so an!
            </p>
          </div>

          <div className='hero-signature'>
            <img
              src='https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/7709eb0b-664a-440b-8822-36dc5b69fd65/Kein+Titel+%28150+x+40+cm%29.png'
              alt='DurchAtmen Integrative Atemtherapie Logo'
              className='hero-logo'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
