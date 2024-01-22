import { Link } from "react-router-dom";
import s from "./BtnBanner.module.css";
import Amazing_img from "../../../Media/Amazing_img.jpg";

export default function BtnBanner() {
  return (
    <figure className={s.home_picture_container}>
      <img
        src={Amazing_img}
        alt="Amazing Discounts on Garden Products!"
        className={s.home_picture}
      />
      <h2 className={s.text_amazing}>Amazing Discounts on Garden Products!</h2>
      <Link to={"/sales"}>
        <button className={s.btn_home_picture}>Check out</button>
      </Link>
    </figure>
  );
}
