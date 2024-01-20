import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo/logo.png";
import iconShop from "./Icons/IconShop.svg";
import s from "./Header.module.css";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <div>
      <div className={s.header_wrapper}>
        <div>
          <Link to={"/"}>
            <img src={logo} alt="" className={s.logo}></img>
          </Link>
        </div>
        <div className={s.menu_wrapper}>
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
        <div className={s.shop_menu}>
          <Link to={"/shopping-cart"}>
            <img src={iconShop} alt="" className={s.icon_shop}></img>
          </Link>
          <BurgerMenu />
        </div>
      </div>
      <div className={s.line}></div>
    </div>
  );
}
