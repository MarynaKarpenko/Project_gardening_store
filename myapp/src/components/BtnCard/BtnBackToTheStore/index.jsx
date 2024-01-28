import { Link } from "react-router-dom";
import s from "../BtnCard.module.css";

export default function BtnBackToTheStore() {
  return (
    <div className={s.btn_div}>
      <Link to={`/products`}>
        <button className={s.btn_cads}>Back to the store </button>
      </Link>
    </div>
  );
}
