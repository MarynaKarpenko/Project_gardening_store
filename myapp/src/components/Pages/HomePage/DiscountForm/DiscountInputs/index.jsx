import s_discount_input from "../DiscountForm.module.css";

export default function DiscountInputs({ register, errors }) {
  const getInputProps = (name, placeholder, pattern, minLength, maxLength) => ({
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
  });

  return (
    <div className={s_discount_input.inputs_div}>
      <label>
        <input
          {...getInputProps("name", "Name", /^[A-ZA-Я]/i, 3, undefined)}
          className={errors.name && s_discount_input.inp_error}
        />
      </label>
      {errors.name && (
        <p className={s_discount_input.error_message}>{errors.name.message}</p>
      )}

      <label>
        <input
          {...getInputProps(
            "number",
            "Phone number",
            /^\+\d\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/i,
            10,
            13
          )}
          className={errors.number && s_discount_input.inp_error}
        />
      </label>
      {errors.number && (
        <p className={s_discount_input.error_message}>
          {errors.number.message}
        </p>
      )}

      <label>
        <input
          {...getInputProps(
            "email",
            "Email",
            /^\S+@\S+\.\S+$/,
            undefined,
            undefined
          )}
          className={errors.email && s_discount_input.inp_error}
        />
      </label>
      {errors.email && (
        <p className={s_discount_input.error_message}>{errors.email.message}</p>
      )}

      <button type="submit" className={s_discount_input.btn_discount}>
        Get a discount
      </button>
    </div>
  );
}
