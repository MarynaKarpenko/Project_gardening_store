import { Link } from "react-router-dom";
import s from "../BtnCard.module.css";

export default function BtnAllProducts({ active }) {
  return (
    <div className={s.btn_div}>
      <Link to={`/products`}>
        <button className={`${s.btn_cads} ${active ? s.activeButton : ""}`}>
          All products
        </button>
      </Link>
    </div>
  );
}
