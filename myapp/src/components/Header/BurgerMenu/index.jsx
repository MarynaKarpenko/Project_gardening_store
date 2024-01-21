import React, { useState } from "react";
import burgerIcon from "../Icons/BurgerMenu.svg";
import crossIcon from "../Icons/IconCross.svg";
import s from "./BurgerMenu.module.css";
import { Link } from "react-router-dom";

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={s.burgerMenuContainer}>
      <div className={s.icons_menu_cross_div} onClick={toggleMenu}>
        <img
          src={menuOpen ? crossIcon : burgerIcon}
          alt=""
          className={s.burger_icon}
        />
      </div>
      {menuOpen && (
        <div className={s.menu_content}>
          <Link to={"/"} className={s.link}>
            <p>Main Page</p>
          </Link>
          <Link to={"/categories"} className={s.link}>
            <p>Categories</p>
          </Link>
          <Link to={"/products"} className={s.link}>
            <p>All products</p>
          </Link>
          <Link to={"/sales"} className={s.link}>
            <p>All sales</p>
          </Link>
        </div>
      )}
    </div>
  );
}