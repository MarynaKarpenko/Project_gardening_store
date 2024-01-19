import { Link } from "react-router-dom";
import s from "../BtnCard.module.css";

export default function BtnAllCategories({ active }) {
  return (
    <div>
      <Link to={`/categories`}>
        <button className={`${s.btn_cads} ${active ? s.activeButton : ""}`}>
          All categories
        </button>
      </Link>
    </div>
  );
}
