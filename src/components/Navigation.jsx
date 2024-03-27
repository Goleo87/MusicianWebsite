import { NavLink } from "react-router-dom";
import top from "/top.jpg";

function Navigation() {
  return (
    <div className="navigation">
     
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <NavLink to="/">
          <img src={top} alt="picture of the background" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
