import { Link } from "react-router-dom";
import s from "../BtnCard.module.css";

export default function BtnAllSales({ active }) {
  return (
    <div className={s.btn_div}>
      <Link to={`/sales`}>
        <button className={`${s.btn_cads} ${active ? s.activeButton : ""}`}>
          All sales
        </button>
      </Link>
    </div>
  );
}
