import { Link } from "react-router-dom";
import s from "../BtnCard.module.css";

export default function BtnCategories({ active }) {
  return (
    <div>
      <Link to={`/categories`}>
        <button className={`${s.btn_cads} ${active ? s.activeButton : ""}`}>
          Categories
        </button>
      </Link>
    </div>
  );
}
