import React from "react";
import { useSelector } from "react-redux";
import s from "./CartPage.module.css";
import EmptyCart from "../../cartComponents/emptyCart/EmptyCart";
import CartItem from "../../cartComponents/cartItem/CartItem";
import CartCalculation from "../../cartComponents/cartCalculation/CartCalculation";
import TitleAndBreadCrumbs from "../../UI/titleAndBreadcrumbs/TitleAndBreadCrumbs";

export default function CartPage() {
  const basketCart = useSelector((state) => state.cart);
  const isCartEmpty = basketCart.length === 0;
  const breadcrumbs = [{ label: "Back to the store", path: "/products" }];

  return (
    <div className={s.cart_wrapper}>
      <TitleAndBreadCrumbs
        title="Shopping cart"
        breadcrumbs={breadcrumbs}
        classTitleContainer={s.title_container}
      />
      <div className={s.flex_container}>
        <div>
          {isCartEmpty ? <EmptyCart /> : <CartItem array={basketCart} />}
        </div>
        {!isCartEmpty && (
          <div>
            <CartCalculation basketCart={basketCart} />
          </div>
        )}
      </div>
    </div>
  );
}
