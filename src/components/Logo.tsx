import logoSvg from '../assets/logo/LogoMechlerAtmen.svg'

const Logo = () => {
  return (
    <div className="header-logo">
      <img
        src={logoSvg}
        alt="DurchAtmen - Integrative Atemtherapie"
      />
    </div>
  )
}

export default Logo