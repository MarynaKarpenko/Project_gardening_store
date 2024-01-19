import { Link } from "react-router-dom";
import s from "../BtnCard.module.css";

export default function BtnMainPage() {
  return (
    <div className={s.btn_div}>
      <Link to={`/`}>
        <button className={s.btn_cads}>Main page</button>
      </Link>
    </div>
  );
}
