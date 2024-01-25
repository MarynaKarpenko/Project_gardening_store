import React from "react";
import s from "./DiscountForm.module.css"
import img_discount_form from "../Media/Discount.svg";
import DiscountInputs from "../DiscountInputs";
import { useForm } from "react-hook-form";

export default function DiscountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={s.form_wrapper} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={s.form_text}>5% off on the first order</h2>
      <div className={s.inform_inputs}>
        <img
          src={img_discount_form}
          alt="Discount form"
          className={s.img_discount}
        />
        <DiscountInputs register={register} errors={errors} />
      </div>
    </form>
  );
}
