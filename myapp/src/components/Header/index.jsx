import { Link } from "react-router-dom";
import logo from "./Logo/logo.png";
import icon from "./Icons/IconShop.svg";
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
          {/* <Link to={"/product/:id"}>
                    <p>Product</p>
                </Link> */}
          <Link to={"/sales"} className={s.link}>
            <p>All sales</p>
          </Link>
        </div>
        <div>
          <Link to={"/shopping-cart"}>
            <img src={icon} alt="" className={s.icon_shoppeng}></img>
          </Link>
        </div>
      </div>
      <div className={s.line}></div>
    </div>
  );
}
