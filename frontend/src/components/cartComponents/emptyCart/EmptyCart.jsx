import React from 'react';
import s from "./EmptyCart.module.css"
import BtnCard, { ButtonTypes } from "../../UI/btnCard/BtnCard";

export default function EmptyCart() {

  return (
      <div className={s.empty_cart}>
          <div className={s.btn}>
            <p>Looks like you have no items in your basket currently.</p>
            <div>
              <BtnCard type={ButtonTypes.SHOPPING} />
            </div>
          </div>
      </div>
  );
}
