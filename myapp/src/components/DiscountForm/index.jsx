import React from "react";
import s from "./DiscountForm.module.css";
import img_discount_form from "../Media/Discount.svg";
import DiscountInputs from "../DiscountInputs";

export default function DiscountForm() {
  return (
    <div className={s.form_wrapper}>
      <h2 className={s.form_text}>5% off on the first order</h2>
      <div className={s.inform_inputs}>
        <img
          src={img_discount_form}
          alt="Discount form"
          className={s.img_discount}
        />
        <DiscountInputs />
      </div>
    </div>
  );
}
