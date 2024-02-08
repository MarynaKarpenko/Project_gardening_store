import React, { useState } from "react";
import s from "./DiscountForm.module.css";
import img_discount_form from "../media/Discount.svg";
import Inputs from "../UI/Inputs";
import BtnCard, { ButtonTypes } from "../UI/BtnCard";
import { getDiscount } from "../../Async/request";
import { useForm } from "react-hook-form";
import CheckautForm from "../UI/checkautForm/CheckautForm";

export default function DiscountForm() {

  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   console.log(data);
  //   if (Object.keys(errors).length === 0) {
  //     await getDiscount(data);
  //   }
  // };

  return (
    <div className={s.form_wrapper}>
      <h2 className={s.form_text}>5% off on the first order</h2>
      <div className={s.inform}>
        <img
          src={img_discount_form}
          alt="Discount form"
          className={s.discount_img}
        />

        <CheckautForm
          classInput={s.discount_input}
          classBtn={s.discount_btn}
          txtBtn="Get a discount"
        />

        {/* <form onSubmit={handleSubmit(onSubmit)} className={s.form_inputs}>
          <Inputs register={register} errors={errors} styleType="style1" />
          <div className={s.btn_discount}>
            <BtnCard type={ButtonTypes.DISCOUNT} />
          </div>
        </form> */}
      </div>
    </div>
  );
}