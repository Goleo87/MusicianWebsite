import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import FooterHome from "./FooterHome";

function Layout() {
  return (

    <div className="app">
    
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
        <FooterHome />
    </div>
  );
}

export default Layout;
