import { NavLink } from "react-router-dom";
// Remove unused imports
// import About from './About';
// import Gallery from './Gallery';
// import Contact from './Contact';
// import Home from './Home';


function Navigation() {
 
 
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink to="/home">
          
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Gallery">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;