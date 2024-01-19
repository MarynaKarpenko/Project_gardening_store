import { useForm } from "react-hook-form";
import s from "../DiscountForm.module.css";

export default function DiscountInputs() {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onChange" });

  let onSubmit = (data) => {
    console.log(data);
    reset();
  };

  let name_input = register("name", {
    required: "Name is required",
    minLength: {
      value: 3,
      message: "Minimum first name length - 3 characters",
    },
    pattern: {
      value: /^[A-ZA-Я]/g,
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
      value: /^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/g,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <input {...name_input} className={s.errors?.name && "inp_error"} placeholder="Name"/>
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
    </form>
  );
}
