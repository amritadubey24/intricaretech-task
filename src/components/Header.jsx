import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo1 from "../assets/images/logo.webp";

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`pmd_header--wrapper ${scrolled ? "sticky" : ""}`}>
      <div className="pmd_header--inner">
        <div className="container">
          <div className="d-flex pmd_header--flex">
            <div className="pmd_logo">
              <Link to="/">
                <img src={logo1} alt="ICCOC Logo" className="img-fluid" />
              </Link>
            </div>

            {/* Navigation Links */}
            <ul className={`navlinks ${menuOpen ? "active" : ""}`}>
              <li className={pathname === "/" ? "active" : ""}>
                <NavLink to="/" end>Product</NavLink>
              </li>
              <li className={pathname === "/about" ? "active" : ""}>
                <NavLink to="/#">Pricing</NavLink>
              </li>
              <li className={pathname === "/services" ? "active" : ""}>
                <NavLink to="/#">Resources</NavLink>
              </li>
              <li className={pathname === "/works" ? "active" : ""}>
                <NavLink to="/#">Company</NavLink>
              </li>
            </ul>
            <li className="mobile-show"><Link to="/contact" className="btn btn-primary">Get your free account</Link></li>
            <ul className="d-flex navicons">
              <li><Link to="/#" className="btn btn-primary">Get your free account</Link></li>
              <li><Link to="/product" className="btn btn-sm">
                <span class="login-icon"></span>  Login</Link>
              </li>
            </ul>

            <div className={`pmd_mobileToggle ${menuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}>
              <Link>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
