import React from "react";
import s from "./Inputs.module.css";
import { useForm } from "react-hook-form";

export default function Inputs({ styleType }) {
  let {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  let name_input = register("name", {
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

  let number_input = register("number", {
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

  let email_input = register("email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Please enter the correct email form",
    },
  });

  const inputStyle = styleType === "style1" ? s.style1 : s.style2;

  return (
    <div className={`${s.inputs_div} ${inputStyle}`}>
      <div>
        <label className={s.label}>
          <input
            type="text"
            placeholder="Name"
            {...name_input}
            className={`${errors.name && "inp_error"} ${inputStyle}`}
          />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label className={s.label}>
          <input
            type="tel"
            placeholder="Number phone"
            {...number_input}
            className={`${errors.number && "inp_error"} ${inputStyle}`}
          />
        </label>
        {errors.number && (
          <p style={{ color: "red" }}>{errors.number.message}</p>
        )}
      </div>
      <div>
        <label className={s.label}>
          <input
            type="text"
            placeholder="Email"
            {...email_input}
            className={`${errors.email && "inp_error"} ${inputStyle}`}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
    </div>
  );
}
