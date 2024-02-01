import React from "react";
import { useDispatch } from "react-redux";
import {sendOrder} from "../../Async/request";
import ShoppingInputs from "../ShoppingInputs"
import s from "./ShoppingCalculation.module.css";
import BtnCard, { ButtonTypes } from "../UI/BtnCard";

export default function ShoppingCalculation({ cart_state }) {
  const dispatch = useDispatch();
  const send_order = (e) => {
    e.preventDefault();
    dispatch(sendOrder({ message: "order send" }));
    e.target.reset();
  };
  const totalPrice = cart_state.reduce(
    (acc, { price, discont_price, count }) =>
      acc + count * (discont_price || price),
    0
  );

  return (
    <div className={s.container}>
      <h3 className={s.h3_order}>Order details</h3>
      <div className={s.total_price}>
        <p className={s.total_p}>Total</p>
        <div>
          <p className={s.total_sum}>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <form className={s.form} onSubmit={send_order}>
        <ShoppingInputs />
        <div className={s.order_btn}>
          <BtnCard key="order-btn" type={ButtonTypes.ORDER} />
        </div>
      </form>
    </div>
  );
}
