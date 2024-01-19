import s from "./DiscountForm.module.css";
import img from "../Pictures/Discount_image.png";
import DiscountInputs from "./DiscountInputs";
import { useForm } from "react-hook-form";

export default function DiscountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form className={s.form_wrapper} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={s.form_text}>5% off on the first order</h2>
        <div className={s.inform_inputs}>
          <img src={img} alt="" />
          <DiscountInputs handleSubmit={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
