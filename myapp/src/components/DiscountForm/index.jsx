import React from "react";
import s from "./DiscountForm.module.css";
import img_discount_form from "../Media/Discount.svg";
import Inputs from "../UI/Inputs";
import BtnCard, { ButtonTypes } from "../UI/BtnCard";
import { getDiscount } from "../../Async/request";

export default function DiscountForm() {
  const submit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      tel_number: e.target.number.value,
      email: e.target.email.value,
    };
    getDiscount(data);
    e.target.reset();
  };

  return (
    <div className={s.form_wrapper}>
      <h2 className={s.form_text}>5% off on the first order</h2>
      <div className={s.inform_img}>
        <img
          src={img_discount_form}
          alt="Discount form"
          className={s.img_discount}
        />
        <form onSubmit={submit} className={s.form_inputs}>
          <Inputs styleType="style1" />
          <div className={s.btn_discount}>
            <BtnCard type={ButtonTypes.DISCOUNT} />
          </div>
        </form>
      </div>
    </div>
  );
}
