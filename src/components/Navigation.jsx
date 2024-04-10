import { NavLink } from "react-router-dom";
import Logo from "/LogoSB.png";

function Navigation() {
  return (
    <div className="navigation">
     
      <nav >
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="picture of the background" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
