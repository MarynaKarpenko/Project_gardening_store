import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../media/icons/logo.svg";
import iconShop from "../media/icons/IconShop.svg";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import s from "./Header.module.css";

export default function Header() {
  const location = useLocation();
  const productsInCart = useSelector((state) => state.cart);

  const navLinks = [
    { to: "/", text: "Main Page" },
    { to: "/categories", text: "Categories" },
    { to: "/products", text: "All products" },
    { to: "/sales", text: "All sales" },
  ];

  return (
    <div className={s.header_container}>
      <div className={s.header_wrapper}>
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Logo" className={s.logo} />
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
              {text}
            </Link>
          ))}
        </div>

        <div className={s.shop_menu}>
          <div className={s.cart}>
            <Link to={"/cart"}>
              <img src={iconShop} alt="Cart" className={s.icon_shop} />
              {productsInCart.length > 0 ? (
                <span>{productsInCart.length}</span>
              ) : (
                ""
              )}
            </Link>
          </div>

          <div className={s.burger_menu_container}>
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
