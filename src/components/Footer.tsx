import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo Column */}
          <div className="footer-column footer-logo-column">
            <img
              src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/715cb0b7-5569-4f51-8f1a-2824765c9c35/Kein+Titel+%28150+x+40+cm%29+%281%29.png"
              alt="Manuela Cosic Logo"
              className="footer-logo"
            />
          </div>

          {/* Middle Column - Info & Badge */}
          <div className="footer-column footer-middle-column">
            <div className="footer-info">
              <p className="footer-text"><strong>Manuela Cosic</strong></p>
              <p className="footer-text">Yogalehrerin</p>
              <p className="footer-text">Integrative Atemtherapeutin</p>
              <p className="footer-text">Achtsamkeitstrainerin</p>
            </div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/67efaaf358ce827f9ba17b5f/fa39c531-1af3-4d8a-bda3-d6faadc98f52/Unknown.png"
              alt="BINTA Berufsverband"
              className="footer-badge"
            />
            <div className="footer-legal-links">
              <Link to="/impressum" className="footer-link">Impressum</Link>
              <Link to="/datenschutz" className="footer-link">Datenschutz</Link>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="footer-column footer-contact-column">
            <div className="footer-address">
              <p className="footer-text">Luchsweg 35</p>
              <p className="footer-text">50259 Pulheim</p>
              <a href="mailto:info@manuelacosic.de" className="footer-link">
                info@manuelacosic.de
              </a>
              <a href="tel:+491512912864" className="footer-link">
                +49 151 2912 8644
              </a>
            </div>
            <div className="footer-contact-buttons">
              <a href="mailto:info@manuelacosic.de" className="footer-button">
                info@manuelacosic.de
              </a>
              <a href="tel:+491512912864" className="footer-button">
                +49 1512 9128644
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Manuela Cosic. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer