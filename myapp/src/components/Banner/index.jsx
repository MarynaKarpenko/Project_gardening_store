import { Link } from "react-router-dom";
import s from "./Banner.module.css";
import Amazing_img from "../Media/Amazing.svg";

export default function Banner() {
  return (
    <div className={s.home_picture_container}>
      <img
        src={Amazing_img}
        alt="Amazing Discounts on Garden Products!"
        className={s.home_picture}
      />
      <h2 className={s.text_amazing}>Amazing Discounts on Garden Products!</h2>
      <Link to={"/sales"}>
        <button className={s.btn_home_picture}>Check out</button>
      </Link>
    </div>
  );
}
