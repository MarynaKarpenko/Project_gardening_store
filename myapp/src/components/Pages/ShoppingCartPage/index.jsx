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
          <div className={s.btn}>
            <p>Looks like you have no items in your basket currently.</p>
            <div>
              <BtnCard type={ButtonTypes.SHOPPING} />
            </div>
          </div>
        ) : null}
      </div>
      {/* <div className={`${s.modal} ${active && s.active}`}>
        <div active={active} setActive={setActive}>
          <img src={iconCross} />
          <h4>Congratulations!</h4>
          <p>
            Your order has been successfully placed on the website. A manager
            will contact you shortly to confirm your order.
          </p>
        </div>
      </div> */}
    </div>
  );
}
