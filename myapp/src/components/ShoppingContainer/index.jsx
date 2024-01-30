import React from "react";
import { useSelector } from "react-redux";
import ShoppingCalculation from "../ShoppingCalculation";
import ShoppingItem from "../ShoppingItem";
import Breadcrumbs from "../UI/Breadcrumbs";
import s from "./ShoppingContainer.module.css";

export default function ShoppingContainer() {
  const cartState = useSelector((state) => state.cart);
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
          {cartState.map((el) => (
            <ShoppingItem key={el.id} {...el} />
          ))}
        </div>
        {cartState.length === 0 ? (
          ""
        ) : (
          <ShoppingCalculation cart_state={cartState} />
        )}
      </div>
    </div>
  );
}
