import s_discount_form from "./DiscountForm.module.css";
import img_discount_form from "../Pictures/Discount_image.png";
import DiscountInputs from "./DiscountInputs";
import { useForm } from "react-hook-form";

export default function DiscountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className={s_discount_form.form_wrapper}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={s_discount_form.form_text}>5% off on the first order</h2>
      <div className={s_discount_form.inform_inputs}>
        <img src={img_discount_form} alt="Discount form" className={s_discount_form.img_discount} />
        <DiscountInputs register={register} errors={errors} />
      </div>
    </form>
  );
}
