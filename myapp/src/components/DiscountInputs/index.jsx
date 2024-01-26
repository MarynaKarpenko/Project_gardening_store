import React, { useState } from "react";
import s from "./DiscountInputs.module.css";
import BtnDiscount from "../BtnCard/BtnDiscount";

export default function DiscountInputs({ register, errors }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const getInputProps = (
    name,
    placeholder,
    pattern,
    minLength,
    maxLength,
    setValue
  ) => ({
    ...register(name, {
      required: `${placeholder} is required`,
      minLength: {
        value: minLength,
        message: `Minimum ${placeholder.toLowerCase()} length - ${minLength} characters`,
      },
      maxLength: {
        value: maxLength,
        message: `Maximum ${placeholder.toLowerCase()} length - ${maxLength} characters`,
      },
      pattern,
    }),
    placeholder,
    onChange: (e) => {
      setValue(e.target.value);
      setShowErrorMessage(false);
    },
    onBlur: () => setShowErrorMessage(true),
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !number || !email) {
      setShowErrorMessage(true);
      return;
    }

    const requestData = {
      name,
      number,
      email,
    };
    console.log("Sent data:", requestData);
  };

  return (
    <div className={s.inputs_div}>
      <label>
        <input
          {...getInputProps(
            "name",
            "Name",
            /^[A-ZA-Я]/i,
            3,
            undefined,
            setName
          )}
          className={errors.name || showErrorMessage ? s.inp_error : undefined}
        />
      </label>
      {(errors.name || showErrorMessage) && (
        <p className={`${s.error_message} ${s.error_text_color}`}>
          {showErrorMessage ? "Enter your details" : errors.name.message}
        </p>
      )}

      <label>
        <input
          {...getInputProps(
            "number",
            "Phone number",
            /^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/i,
            10,
            13,
            setNumber
          )}
          className={errors.name || showErrorMessage ? s.inp_error : undefined}
        />
      </label>
      {(errors.number || showErrorMessage) && (
        <p className={`${s.error_message} ${s.error_text_color}`}>
          {showErrorMessage ? "Enter your details" : errors.number.message}
        </p>
      )}

      <label>
        <input
          {...getInputProps(
            "email",
            "Email",
            /^\S+@\S+\.\S+$/,
            undefined,
            undefined,
            setEmail
          )}
          className={errors.name || showErrorMessage ? s.inp_error : undefined}
        />
      </label>
      {(errors.email || showErrorMessage) && (
        <p className={`${s.error_message} ${s.error_text_color}`}>
          {showErrorMessage ? "Enter your details" : errors.email.message}
        </p>
      )}
      <BtnDiscount onSubmit={handleSubmit} />
    </div>
  );
}
