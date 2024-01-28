import React from "react";
import s from "./ShoppingContainer.module.css"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import BtnBackToTheStore from "../BtnCard/BtnBackToTheStore"
import ShoppingCalculation from "../ShoppingCalculation";
import ShoppingItem from "../ShoppingItem";

export default function ShoppingContainer() {
   const cart_state = useSelector((state) => state.cart);
   const navigate = useNavigate();

  return (
    <div>
      <h2>Shopping cart</h2>
<BtnBackToTheStore/>
      <div className={s.flex_container}>
        <div className={s.cart}>
          {cart_state.map((el) => (
            <ShoppingItem key={el.id} {...el} />
          ))}
        </div>
        {cart_state.length === 0 ? (
          ""
        ) : (
          <ShoppingCalculation cart_state={cart_state} />
        )}
      </div>
    </div>
  );
}
