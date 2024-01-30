import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Icons/logo.svg";
import iconShop from "../Icons/IconShop.svg";
import BurgerMenu from "./BurgerMenu";
import s from "./Header.module.css";

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { to: "/", text: "Main Page" },
    { to: "/categories", text: "Categories" },
    { to: "/products", text: "All products" },
    { to: "/sales", text: "All sales" },
  ];

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
