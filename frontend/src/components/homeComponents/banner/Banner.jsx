import s from "./Banner.module.css";
import Amazing_img from "../../media/images/Amazing.svg";
import BtnCard, { ButtonTypes } from "../../UI/btnCard/BtnCard";

export default function Banner() {
  return (
    <div className={s.home_picture_container}>
      <img
        src={Amazing_img}
        alt="Amazing Discounts on Garden Products!"
        className={s.home_picture}
      />
      <div className={s.text_and_btn}>
        <h2 className={s.text_amazing}>
          Amazing Discounts on Garden Products!
        </h2>
        <BtnCard type={ButtonTypes.CHECK_OUT} />
      </div>
    </div>
  );
}
