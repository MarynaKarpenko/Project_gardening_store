import { useForm } from "react-hook-form";
import s from "../DiscountForm.module.css";

export default function DiscountInputs({ handleSubmit, onSubmit }) {
  let {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  let name_input = register("name", {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Minimum first name length - 3 characters",
    },
    pattern: {
      value: /^[A-ZA-Я]/i, // Исправил регулярное выражение
      message: "The name must begin with a capital letter",
    },
  });

  let number_input = register("number", {
    required: "Number is required",
    minLength: {
      value: 10,
      message: "Minimum phone number length - 10 characters",
    },
    maxLength: {
      value: 13,
      message: "Maximum phone number length - 13 characters",
    },
    pattern: {
      value: /^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/i, // Исправил регулярное выражение
      message: "The phone number must start with +",
    },
  });

  let email_input = register("email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Invalid email format",
    },
  });

  return (
    <div>
      <div className={s.inputs_div}>
        <label>
          <input
            {...name_input}
            className={s.errors?.name && "inp_error"}
            placeholder="Name"
          />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <label>
          <input
            {...number_input}
            className={s.errors?.number && "inp_error"}
            placeholder="Phone number"
          />
        </label>
        {errors.number && (
          <p style={{ color: "red" }}>{errors.number.message}</p>
        )}

        <label>
          <input
            {...email_input}
            className={s.errors?.email && "inp_error"}
            placeholder="Email"
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <button type="submit" onClick={handleSubmit(onSubmit)} className={s.btn_discount}>
        Get a discount
      </button>
    </div>
  );
}
