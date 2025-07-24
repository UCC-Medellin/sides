import { useEffect, useState } from "react";
import logo from "../assets/logo-sides.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);    

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.005); // puedes ajustar este valor
      console.log(scrolled && !isMobileSize)
      console.log(scrolled && isMobileSize);
    };

    const handleSize = () => {
      setIsMobileSize(window.innerWidth < 768);
    }
    handleSize();
    
    window.addEventListener("resize", handleSize)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`relative sticky top-0 z-20 w-full py-4 text-white transition-colors duration-500 backdrop-blur-none ` + (scrolled ?? 'shadow-md backdrop-blur-[100px]')}
      style={{
        background: scrolled && !isMobileSize ? `radial-gradient(circle at center, #9FA62C 25%, #80AF38 50%, #225A7E 110%)` : (
          scrolled && isMobileSize ?   `radial-gradient(circle at center, #80AF38 10%, #225A7E 250%)`: ''
        ),
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <img src={logo} className="self-center aspect-auto max-h-[32px] w-fit"/>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú */}
        <ul className="hidden md:flex gap-6 text-white font-medium px-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => {
                let className = "font-bold text-xl ";
                className += isActive ? "underline" : "hover:underline";
                return className;
              }}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/agenda" 
              className={({ isActive }) => {
                let className = "font-bold text-xl ";
                className += isActive ? "underline" : "hover:underline";
                return className;
              }}
            >
              Agenda
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/expositores" 
              className={({ isActive }) => {
                let className = "font-bold text-xl ";
                className += isActive ? "underline" : "hover:underline";
                return className;
              }}
            >
              Expositores
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="backdrop-blur-[100px] absolute md:hidden mt-4 space-y-2 px-6 py-2 text-white font-medium w-full shadow-md"
          style={{
            background: `radial-gradient(ellipse at bottom, #9FA62C 10%, #80AF38 40%, #225A7E 300%)`,
          }}
        >
          <li>
            <NavLink 
              to="/"
              className={({ isActive }) => {
                let className = "text-md block ";
                className += isActive ? "underline font-bold" : "hover:underline hover:font-bold";
                return className;
              }}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/agenda"
              className={({ isActive }) => {
                let className = "text-md block ";
                className += isActive ? "underline font-bold" : "hover:underline hover:font-bold";
                return className;
              }}
            >
              Agenda
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/expositores"
              className={({ isActive }) => {
                let className = "text-md block ";
                className += isActive ? "underline font-bold" : "hover:underline hover:font-bold";
                return className;
              }}
            >
              Expositores
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
