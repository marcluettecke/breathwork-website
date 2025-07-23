import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-title">Kontakt</h3>
            <div className="footer-links">
              <a 
                href="mailto:info@manuelacosic.de" 
                className="footer-link"
              >
                info@manuelacosic.de
              </a>
              <a 
                href="tel:+4915129128644" 
                className="footer-link"
              >
                +49 1512 9128644
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h3 className="footer-title">Schnelllinks</h3>
            <div className="footer-links">
              <Link to="/yoga" className="footer-link">
                Yoga
              </Link>
              <Link to="/atemtherapie" className="footer-link">
                Atemtherapie
              </Link>
              <Link to="/about" className="footer-link">
                Über mich
              </Link>
              <Link to="/termine" className="footer-link">
                Termine
              </Link>
            </div>
          </div>

          {/* Legal Links Column */}
          <div className="footer-column">
            <h3 className="footer-title">Rechtliches</h3>
            <div className="footer-links">
              <Link to="/impressum" className="footer-link">
                Impressum
              </Link>
              <Link to="/datenschutz" className="footer-link">
                Datenschutz
              </Link>
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