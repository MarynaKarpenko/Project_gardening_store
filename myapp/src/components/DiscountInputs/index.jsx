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
   reset,
   watch,
 } = useForm({ mode: "onChange" });

const submit = (e) => {
  e.preventDefault();
  const number = {
    tel_name: e.target.name.value,
    tel_number: e.target.telehpon.value,
    tel_email: e.target.email.value,
  };
  getDiscount(number);
  e.target.reset();
};
  let name_input = register('name', {
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
                      value: /^[A-ZA-Я]/g,
                      message: "Name must start with a capital letter"
                  },
              });

let number_input = register("number", {
  required: "Number is required",
  minLength: {
    value: 10,
    message: "Minimum name length 10",
  },
  maxLength: {
    value: 16,
    message: "Maximum name length 16",
  },

});

let email_input = register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter the correct email form",
                },
              });

  return (
    <form onSubmit={submit} className={s.inputs_div}>
      <div>
        <label>
          <input
            type="text"
            placeholder="Name"
            {...name_input}
            className={errors.name && "inp_error"}
          />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label>
          <input
            type="tel"
            placeholder="Number phone"
            {...number_input}
            className={errors.number && "inp_error"}
          />
        </label>
        {errors.number && (
          <p style={{ color: "red" }}>{errors.number.message}</p>
        )}
      </div>
      <div>
        <label>
          <input
            type="text"
            placeholder="Email"
            {...email_input}
            className={errors.email && "inp_error"}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <BtnDiscount onSubmit={handleSubmit} />
    </form>
  );
}
