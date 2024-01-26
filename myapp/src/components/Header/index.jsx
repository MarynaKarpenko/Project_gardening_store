import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Icons/logo.svg";
import iconShop from "../Icons/IconShop.svg";
import BurgerMenu from "./BurgerMenu";
import s from "./Header.module.css";

export default function Header() {
  const location = useLocation();
  return (
    <>
      <div>
        <div className={s.header_wrapper}>
          <div>
            <Link to={"/"}>
              <img src={logo} alt="" className={s.logo} />
            </Link>
          </div>
          <div className={s.menu_wrapper}>
            <Link
              to={"/"}
              className={`${s.link} ${
                location.pathname === "/" ? s.active_link : ""
              }`}
            >
              <p>Main Page</p>
            </Link>
            <Link
              to={"/categories"}
              className={`${s.link} ${
                location.pathname === "/categories" ? s.active_link : ""
              }`}
            >
              <p>Categories</p>
            </Link>
            <Link
              to={"/products"}
              className={`${s.link} ${
                location.pathname === "/products" ? s.active_link : ""
              }`}
            >
              <p>All products</p>
            </Link>
            <Link
              to={"/sales"}
              className={`${s.link} ${
                location.pathname === "/sales" ? s.active_link : ""
              }`}
            >
              <p>All sales</p>
            </Link>
          </div>
          <div className={s.shop_menu}>
            <Link to={"/shopping-cart"}>
              <img src={iconShop} alt="" className={s.icon_shop} />
            </Link>
            <div className={s.burger_menu_container}>
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
      <div className={s.line}></div>
    </>
  );
}
