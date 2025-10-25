import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HeaderProps, NavItem } from "../models";
import "./Header.scss";
import Logo from "./Logo";

const navItems: NavItem[] = [
  { label: "Atemtherapie", path: "/atemtherapie" },
  { label: "Über mich", path: "/about" },
  { label: "Termine", path: "/termine" },
];

// Pages that have hero sections and should start with transparent header
const transparentHeaderPages = ['/', '/kontakt'];

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const shouldStartTransparent = transparentHeaderPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""} ${shouldStartTransparent && !isScrolled ? "transparent" : ""}`}>
      <div className='header-inner'>
        <Link to='/' className='flex items-center'>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className='header-nav'>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `header-nav-item ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to='/kontakt' className='kontakt-button'>
            Kontakt
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden p-2 ${
            isScrolled ? "text-primary" : "text-white"
          }`}
          aria-label='Toggle mobile menu'
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {isMobileMenuOpen ? (
              <path d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden fixed inset-x-0 top-0 bg-white shadow-lg transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-y-24" : "-translate-y-full"
        }`}
      >
        <div className='container mx-auto px-4 py-4 pt-28'>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-lg transition-colors duration-200 ${
                  isActive
                    ? "text-primary-dark font-medium"
                    : "text-primary hover:text-primary-dark"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to='/kontakt'
            onClick={() => setIsMobileMenuOpen(false)}
            className='block mt-4 px-5 py-4 bg-primary text-white rounded-button hover:bg-primary-dark transition-colors duration-200 text-center'
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
