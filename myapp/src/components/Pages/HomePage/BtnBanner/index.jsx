import { Link } from "react-router-dom";
import s from "./BtnBanner.module.css";
import img from "../Pictures/img.jpg";

export default function BtnBanner() {
  return (
    <div className={s.home_picture_container}>
      <img src={img} alt="" className={s.home_picture}></img>
      <h2 className={s.text_amaying}>Amazing Discounts on Garden Products!</h2>
      <Link to={"/sales"}>
        <button className={s.btn_home_picture}>Check out</button>
      </Link>
    </div>
  );
}
