import './Hero.scss'

const Hero = () => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/b90e6722-7855-4ce2-b64f-2fccc4a9218f/beautiful-view-morning-light.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 w-full hero-content-wrapper">
        <div className="hero-content">
          <h1 className="hero-title font-urbanist">
            Vinyasa Yoga.<br />
            Integrative Atemtherapie.<br />
            In Köln & Pulheim.
          </h1>
          
          <div>
            <p className="hero-text">
              Dein Körper und dein Atem spiegeln den Zustand deines Geistes und deiner Seele. 
              Komm wieder in Verbindung zu dir selbst.
            </p>
            <p className="hero-text">
              Gerne begleite ich dich für mehr Ruhe, Balance und Lebensfreude in deinem Alltag.
            </p>
          </div>
          
          <div className="hero-signature">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/5da8c893-7f50-4b76-9c8f-1e0c3e88fbab/Unbenanntes_Projekt+%282%29.png"
              alt="Manuela"
              className="h-[80px] opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero