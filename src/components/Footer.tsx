import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left Column - Info & Badge */}
          <div className="footer-column footer-middle-column">
            <div className="footer-info">
              <p className="footer-text"><strong>Manuel Mechler</strong></p>
              <p className="footer-text">DurchAtmen</p>
              <p className="footer-text">Integrativer Atemtherapeut</p>
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
              <p className="footer-text">Rolandstr. 61</p>
              <p className="footer-text">50677 Köln</p>
              <p className="footer-text">Tel: 0221-25919697</p>
              <p className="footer-text">manuelmechler@durchatmen.life</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} DurchAtmen - Manuel Mechler. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer