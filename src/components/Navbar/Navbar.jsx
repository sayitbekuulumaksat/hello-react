import { useState } from "react";
import "./navbar.scss";
import {Link, NavLink} from "react-router-dom";
import menuIcon from "./images/burger.svg";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const showMenu = () => {
    setMenuActive(!menuActive);
  };
  let menuData = [
    { name: "Home", src: "/" },
    { name: "About", src: "about" },
    { name: "Services", src: "services" },
    { name: "Contact", src: "contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo">
          Logo
        </Link>
        <button onClick={showMenu} className="navbar__toggle">
          <img src={menuIcon} alt="burger" className="navbar__toggle_icon" />
        </button>
        <ul className={menuActive ? "navbar__items_show" : "navbar__items"}>
          {menuData.map((i) => (
            <li className="navbar__item">
              <NavLink onClick={showMenu} to={i.src} className="navbar__link">
                {i.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
