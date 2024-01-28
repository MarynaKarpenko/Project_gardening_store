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
import iconPlus from "../Icons/Plus.svg"


export default function ShoppingItem({
  id,
  title,
  price,
  discont_price,
  description,
  image,
  count,
}) {
  const dispatch = useDispatch();
  const discount = Math.round(100 - (discont_price / price) * 100);

  return (
    <div className={s.cart}>
      <img
        src={iconCross}
        className={s.cross_delete}
        onClick={() => dispatch(removeCartAction(id))}
      />
      <div className={s.product_info}>
        <img src={`${BASE_URL}/${image}`} alt={title} />
        <div className={s.product_name}>
          <p>{title}</p>
          <div className={s.counter}>
            <img
              src={iconMinus}
              className={s.icons}
              onClick={() => dispatch(cartDecrAction(id))}
            />
            <p>{count}</p>
            <img
              src={iconPlus}
              className={s.icons}
              onClick={() => dispatch(cartIncrAction(id))}
            />
          </div>
        </div>
      </div>
      <div className={s.price_container}>
        {discont_price === null ? (
          <div className={s.price}>
            <p>{price}</p>
            <p>$</p>
          </div>
        ) : (
          <div className={s.price_with_discount}>
            <div className={s.price}>
              <p>{discont_price}</p>
              <p>$</p>
            </div>
            <p className={s.old_price}>{price}$</p>
            <div className={s.sale_value}>
              <p>{discount}</p>
              <p>%</p>
            </div>
          </div>
        )}
      </div>
      <div className={s.description}>
        <p>Description</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
