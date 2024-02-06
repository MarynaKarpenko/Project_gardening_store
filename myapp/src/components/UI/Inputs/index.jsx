import React from "react";
import { useForm } from "react-hook-form";
import s from "./Inputs.module.css";

export default function Inputs({ styleType }) {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const inputStyles = [
    s.inputs_div,
    styleType === "style1" ? s.style1 : s.style2,
  ];

  const renderInput = (name, type, placeholder, validation) => (
    <div>
      <label className={s.label}>
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
          className={`${errors[name] && "inp_error"} ${
            s.full_input
          } ${inputStyles.join(" ")}`}
        />
      </label>
      {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
    </div>
  );

  const name_input_validation = {
    required: "Name is required",
    minLength: { value: 3, message: "Minimum name length 3" },
    maxLength: { value: 25, message: "Maximum name length 25" },
    pattern: {
      value: /^[A-ZА-Я]/i,
      message: "Name must start with a capital letter",
    },
  };

  const number_input_validation = {
    required: "Number is required",
    minLength: { value: 10, message: "Minimum number length 10" },
    maxLength: { value: 16, message: "Maximum number length 16" },
  };

  const email_input_validation = {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Please enter the correct email format",
    },
  };

  return (
    <div className={inputStyles.join(" ")}>
      {renderInput("name", "text", "Name", name_input_validation)}
      {renderInput("number", "tel", "Number phone", number_input_validation)}
      {renderInput("email", "email", "Email", email_input_validation)}
    </div>
  );
}
