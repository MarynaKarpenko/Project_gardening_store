import React from "react";
import { useSelector } from "react-redux";
import CartCalculation from "../cartCalculation/CartCalculation";
import CartItem from "../cartItem/CartItem";
import Breadcrumbs from "../UI/Breadcrumbs";
import s from "./CartContainer.module.css";

export default function CartContainer() {
  const cart_state = useSelector((state) => state.cart);
  const breadcrumbs = [{ label: "Back to the store", path: "/products" }];

  return (
    <div className={s.cart_wrapper}>
      <div className={s.btn_container}>
        <h1 className={s.categories_h1}>Shopping cart</h1>
        <div className={s.line}></div>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <div className={s.flex_container}>
        <div className={s.cart}>
          {cart_state.map((el) => (
            <CartItem key={el.id} {...el} />
          ))}
        </div>
        {cart_state.length === 0 ? (
          ""
        ) : (
          <CartCalculation cart_state={cart_state} />
        )}
      </div>
    </div>
  );
}
