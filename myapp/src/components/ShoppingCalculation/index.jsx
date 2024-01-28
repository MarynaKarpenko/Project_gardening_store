import React from "react";
import { useDispatch } from "react-redux";
import {sendOrder} from "../../Async/request";
import { useForm } from 'react-hook-form';
import s from "./ShoppingCalculation.module.css";
import ShoppingInputs from "../ShoppingInputs";

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
      <h3>Order details</h3>
      <div className={s.total_price}>
        <p>Total</p>
        <div>
          <p>{totalPrice.toFixed(2)}</p>
          <p>$</p>
        </div>
      </div>
      <form className={s.form} onSubmit={send_order}>
        
         
        <button>Order</button>
      </form>
    </div>
  );
}
