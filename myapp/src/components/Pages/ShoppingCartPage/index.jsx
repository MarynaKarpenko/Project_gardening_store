import React from "react";
import ShoppingContainer from "../../ShoppingContainer";
import BtnCard, { ButtonTypes } from "../../UI/BtnCard";
import { useSelector } from "react-redux";
import s from "./ShoppingCartPage.module.css";

export default function ShoppingCartPage() {

  const cartState = useSelector((state) => state.cart);

  const isCartEmpty = cartState.length === 0;

  return (
    <div>
      <ShoppingContainer />
      <div className={s.empty_cart}>
        {isCartEmpty ? (
          <div>
            <p>Looks like you have no items in your basket currently.</p>
            <BtnCard type={ButtonTypes.SHOPPING} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
