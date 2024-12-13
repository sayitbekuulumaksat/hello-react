import { useState } from "react";
import "./navbar.scss";
import menuIcon from "./images/burger.svg";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const showMenu = () => {
    setMenuActive(!menuActive);
  };
  let menuData = [
    { name: "Home", src: "/" },
    { name: "About Us", src: "/" },
    { name: "Products", src: "/" },
    { name: "Contact", src: "/" }
  ];

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <a href="/" className="navbar__logo">
          Logo
        </a>
        <button onClick={showMenu} className="navbar__toggle">
          <img src={menuIcon} alt="burger" className="navbar__toggle_icon" />
        </button>
        <ul className={menuActive ? "navbar__items_show" : "navbar__items"}>
          {menuData.map((i) => (
            <li className="navbar__item">
              <a href={i.src} className="navbar__link">
                {i.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
