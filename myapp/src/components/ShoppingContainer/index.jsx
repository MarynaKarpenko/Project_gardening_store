import React from "react";
import s from "./ShoppingContainer.module.css";
import { useSelector } from "react-redux";
import BtnBackToTheStore from "../BtnCard/BtnBackToTheStore";
import ShoppingCalculation from "../ShoppingCalculation";
import ShoppingItem from "../ShoppingItem";

export default function ShoppingContainer() {
  const cartState = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Shopping cart</h2>
      <BtnBackToTheStore />
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
