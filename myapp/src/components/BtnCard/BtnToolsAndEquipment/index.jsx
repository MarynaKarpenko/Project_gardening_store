import { Link } from "react-router-dom";
import s from "../BtnCard.module.css";

export default function BtnToolsAndEquipment({ active }) {
  return (
    <div>
      <Link to={`/categories/:name`}>
        <button className={`${s.btn_cads} ${active ? s.activeButton : ""}`}>
          Tools and equipment
        </button>
      </Link>
    </div>
  );
}
