import { Link } from "react-router-dom";
import s from "../BtnCard.module.css";

export default function BtnSingleProduct({ active}) {
  return (
    <div>
      <Link to={"/product/:productId"}>
        <button className={`${s.btn_cads} ${active ? s.activeButton : ""}`}>
          <p>Product</p>
        </button>
      </Link>
    </div>
  );
}
