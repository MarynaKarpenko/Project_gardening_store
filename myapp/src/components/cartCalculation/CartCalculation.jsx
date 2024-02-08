import React from "react";
import { useDispatch } from "react-redux";
import { sendOrder } from "../../Async/request";
import s from "./CartCalculation.module.css";
// import BtnCard, { ButtonTypes } from "../UI/BtnCard";
// import Inputs from "../UI/Inputs";
import CheckautForm from "../UI/checkautForm/CheckautForm";

export default function CartCalculation({ cart_state }) {
  const dispatch = useDispatch();

  // const send_order = (e) => {
  //   e.preventDefault();
  //   dispatch(sendOrder({ message: "order send" }));
  //   e.target.reset();
  // };

  const totalItems = cart_state.reduce((acc, { count }) => acc + count, 0);

  const totalPrice = cart_state.reduce(
    (acc, { price, discont_price, count }) =>
      acc + count * (discont_price || price),
    0
  );

  return (
    <div className={s.container}>
      <h3 className={s.h3_order}>Order details</h3>

      <div className={s.total_items}>
        <p className={s.total_items_sum}>{totalItems} items</p>
      </div>

      <div className={s.total_price}>
        <p className={s.total_p}>Total</p>
        <div>
          <p className={s.total_sum}>${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <CheckautForm classInput={s.input} classBtn={s.btn} txtBtn="Order" />

      {/* <form className={s.form} onSubmit={send_order}>
        <Inputs styleType="style2" />
        <div className={s.order_btn}>
          <BtnCard key="order-btn" type={ButtonTypes.ORDER} />
        </div>
      </form> */}
    </div>
  );
}
