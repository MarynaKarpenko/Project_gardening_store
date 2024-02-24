import React from "react";
import { useForm } from "react-hook-form";
import s from "./CheckoutForm.module.css";

export default function CheckoutForm({
  setSendingOrder,
  handleDiscountSubmit,
  classInput,
  classBtn,
  txtBtn,
}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (formData) => {
    reset();
    console.log(formData);
    setSendingOrder && setSendingOrder(true);
    handleDiscountSubmit && handleDiscountSubmit();
  };

  return (
    <form className={s.form_container} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.input_container}>
        <input
          {...register("name", {
            required: "File is required!",
          })}
          type="text"
          placeholder="Name"
          className={`${classInput} ${s.input}`}
        />
        {errors?.name && (
          <p className={s.error_message}>{errors.name?.message}</p>
        )}

        <input
          {...register("phone", {
            required: "File is required!",
            minLength: { value: 13, message: "Minimum number length 13" },
            maxLength: { value: 13, message: "Maximum number length 13" },
          })}
          type="tel"
          placeholder="Phone number"
          className={`${classInput} ${s.input}`}
        />
        {errors?.phone && (
          <p className={s.error_message}>{errors.phone?.message}</p>
        )}

        <input
          {...register("email", {
            required: "File is required!",
          })}
          type="email"
          placeholder="Email"
          className={`${classInput} ${s.input}`}
        />
        {errors?.email && (
          <p className={s.error_message}>{errors.email?.message}</p>
        )}
      </label>
      <button className={`${classBtn} ${s.btn}`} disabled={!isValid}>
        {txtBtn}
      </button>
    </form>
  );
}
