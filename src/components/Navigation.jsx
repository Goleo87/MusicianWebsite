import { NavLink } from "react-router-dom";
import Logo from "/LogoSB.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navigation">
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>

      <nav>
        <ul className="hidden">
          <li>
            <NavLink to="/home" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="switch"  onClick={toggleMenu}>
          {isMenuOpen ? (
            <GrClose class="hamburger" />
          ) : (
            <GiHamburgerMenu class="hamburger" />
          )} 
        </div>
        <div className = "openMenu" style = {isMenuOpen ? {color: 'red', height: '20vh', width: '100%'} : {opacity:0} }>
        <ul className="mobileList">
          <li>
            <NavLink to="/home" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        </div>
        
      </nav>
    </div>
  );
}

export default Navigation;
