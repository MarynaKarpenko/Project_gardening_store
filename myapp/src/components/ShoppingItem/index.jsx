import React from "react";
import { useDispatch } from "react-redux";
import {
  cartDecrAction,
  cartIncrAction,
  removeCartAction,
} from "../../store/reducers/cartReducer";
import { BASE_URL } from "../../config";
import s from "./ShoppingItem.module.css";
import iconCross from "../Icons/IconCross.svg";
import iconMinus from "../Icons/Minus.svg";
import iconPlus from "../Icons/Plus.svg";

export default function ShoppingItem({
  id,
  title,
  price,
  discont_price,
  image,
  count,
}) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeCartAction(id));
  };

  const handleIncrement = () => {
    dispatch(cartIncrAction(id));
  };

  const handleDecrement = () => {
    dispatch(cartDecrAction(id));
  };

  return (
    <div className={s.cart}>
      <img
        src={iconCross}
        className={s.cross_delete}
        alt="cross"
        onClick={handleRemoveFromCart}
      />
      <div className={s.product_info}>
        <img
          src={`${BASE_URL}/${image}`}
          alt={title}
          className={s.shopping_img}
        />
        <div className={s.products}>
          <p className={s.product_name}>{title}</p>
          <div className={s.container}>
            <div className={s.price_counter}>
              <div className={s.icon_minus}>
                <img src={iconMinus} alt="minus" onClick={handleDecrement} />
              </div>
              <p className={s.counter}>{count}</p>
              <div className={s.icon_plus}>
                <img src={iconPlus} alt="plus" onClick={handleIncrement} />
              </div>
            </div>
            <div className={s.price}>
              {discont_price === null ? (
                <div className={s.real_price}>
                  <p>${price}</p>
                </div>
              ) : (
                <div className={s.price_with_discount}>
                  <div className={s.real_price}>
                    <p>${discont_price}</p>
                  </div>
                  <p className={s.discount_price}>${price}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
