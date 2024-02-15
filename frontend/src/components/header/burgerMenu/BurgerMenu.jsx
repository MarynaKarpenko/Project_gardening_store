import React, { useState } from "react";
import burgerIcon from "../../media/icons/BurgerMenu.svg";
import crossIcon from "../../media/icons/IconCross.svg";
import s from "./BurgerMenu.module.css";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", text: "Main Page" },
  { to: "/categories", text: "Categories" },
  { to: "/products", text: "All products" },
  { to: "/sales", text: "All sales" },
];

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <div className={`${s.burgerMenuContainer} ${menuOpen ? s.menu_open : ""}`}>
      <div className={s.icons_menu_cross_div} onClick={toggleMenu}>
        <img
          src={menuOpen ? crossIcon : burgerIcon}
          alt="Cross"
          className={s.burger_icon}
        />
      </div>
      {menuOpen && (
        <div className={s.menu_content}>
          {navLinks.map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className={`${s.link} ${
                location.pathname === to ? s.active_link : ""
              }`}
            >
              <p>{text}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
