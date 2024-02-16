import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./CartPage.module.css";
import EmptyCart from "../../cartComponents/emptyCart/EmptyCart";
import CartItem from "../../cartComponents/cartItem/CartItem";
import CartOrder from "../../cartComponents/cartOrder/CartOrder";
import TitleAndBreadCrumbs from "../../UI/titleAndBreadcrumbs/TitleAndBreadCrumbs";
import { saveCart } from "../../cartComponents/cartLocalStorage/CartLocalStorage";

export default function CartPage() {
  const basketCart = useSelector((state) => state.cart);
  const isCartEmpty = basketCart.length === 0;
  const breadcrumbs = [{ label: "Back to the store", path: "/products" }];
  useEffect(() => {
    saveCart(basketCart);
  }, [basketCart]);

  return (
    <div className={s.cart_wrapper}>
      <TitleAndBreadCrumbs
        title="Shopping cart"
        breadcrumbs={breadcrumbs}
        classTitleContainer={s.title_container}
      />
      <div className={s.flex_container}>
        {isCartEmpty ? <EmptyCart /> : <CartItem array={basketCart && basketCart} />}
        {!isCartEmpty && (
          // <div className={s.order_container}>
            <CartOrder basketCart={basketCart} />
          // </div>
        )}
      </div>
    </div>
  );
}
