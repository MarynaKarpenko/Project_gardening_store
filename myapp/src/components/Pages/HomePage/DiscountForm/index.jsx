import s from './DiscountForm.module.css'
import img from '../Pictures/Discount_image.png'
import DiscountInputs from './DiscountInputs';

export default function DiscountForm(){
    return (
      <div>
        <form className={s.form_wrapper}>
          <h2 className={s.form_text}>5% off on the first order</h2>
          <div>
            <img src={img} alt=""></img>
            <DiscountInputs/>
          </div>
        </form>
      </div>
    );
}