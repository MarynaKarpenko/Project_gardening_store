import React, { useState } from "react";
import s from "./CartOrder.module.css";
import CheckoutForm from "../../UI/checkoutForm/CheckoutForm";
import CartModalWindow from "../cartModalWindow/CartModalWindow";

export default function CartOrder({ basketCart }) {
  const [sendingOrder, setSendingOrder] = useState(false);
  const totalPrice =
    basketCart &&
    basketCart.reduce(
      (acc, { price, discont_price, count }) =>
        acc + count * (discont_price || price),
      0
    );

  return (
    <div className={s.container}>
      <h3 className={s.h3_order}>Order details</h3>
      <div className={s.total_items}>
        <p className={s.total_items_sum}>{basketCart.length} items</p>
      </div>
      <div className={s.total_price}>
        <p className={s.total_p}>Total</p>
        <div>
          <p className={s.total_sum}>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <CheckoutForm
        setSendingOrder={setSendingOrder}
        classInput={s.input}
        classBtn={s.btn}
        txtBtn="Order"
      />
      <CartModalWindow
        setSendingOrder={setSendingOrder}
        sendingOrder={sendingOrder}
      />
    </div>
  );
}
