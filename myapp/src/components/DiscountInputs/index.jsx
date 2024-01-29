import React from "react";
import { useForm } from "react-hook-form";
import s from "./DiscountInputs.module.css";
import BtnDiscount from "../BtnCard/BtnDiscount";
import { getDiscount } from "../../Async/request";

export default function DiscountInputs() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const submit = (data) => {
    if (!data.tel_name || !data.tel_number || !data.tel_email) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    if (errors.email) {
      alert("Please enter a valid email address.");
      return;
    }
    if (Object.keys(errors).length > 0) {
      alert("Please correct the form errors before submitting.");
      return;
    }
    getDiscount(data);
  };

  let name_input = register("tel_name", {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Minimum name length 3",
    },
    maxLength: {
      value: 25,
      message: "Maximum name length 25",
    },
    pattern: {
      value: /^[A-ZА-Я]/i,
      message: "Name must start with a capital letter",
    },
  });

  let number_input = register("tel_number", {
    required: "Number is required",
    minLength: {
      value: 10,
      message: "Minimum number length 10",
    },
    maxLength: {
      value: 16,
      message: "Maximum number length 16",
    },
  });

  let email_input = register("tel_email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Please enter the correct email form",
    },
  });

  return (
    <form onSubmit={handleSubmit(submit)} className={s.inputs_div}>
      <div>
        <label>
          <input
            type="text"
            placeholder="Name"
            {...name_input}
            className={errors.tel_name && "inp_error"}
          />
        </label>
        {errors.tel_name && (
          <p style={{ color: "red" }}>{errors.tel_name.message}</p>
        )}
      </div>
      <div>
        <label>
          <input
            type="tel"
            placeholder="Number phone"
            {...number_input}
            className={errors.tel_number && "inp_error"}
          />
        </label>
        {errors.tel_number && (
          <p style={{ color: "red" }}>{errors.tel_number.message}</p>
        )}
      </div>
      <div>
        <label>
          <input
            type="text"
            placeholder="Email"
            {...email_input}
            className={errors.tel_email && "inp_error"}
          />
        </label>
        {errors.tel_email && (
          <p style={{ color: "red" }}>{errors.tel_email.message}</p>
        )}
      </div>
      <BtnDiscount onSubmit={handleSubmit(submit)} />
    </form>
  );
}
