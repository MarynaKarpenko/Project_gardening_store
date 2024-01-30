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
  image,
  count,
}) {
  const dispatch = useDispatch();
  
  return (
    <div className={s.cart}>
      <img
        src={iconCross}
        className={s.cross_delete}
        alt="cross"
        onClick={() => dispatch(removeCartAction(id))}
      />
      <div className={s.product_info}>
        <img src={`${BASE_URL}/${image}`} alt={title} className={s.shopping_img}/>
        <div className={s.product_name}>
          <p>{title}</p>
          <div className={s.counter}>
            <img
              src={iconMinus}
              className={s.icons}
              alt="minus"
              onClick={() => dispatch(cartDecrAction(id))}
            />
            <p>{count}</p>
            <img
              src={iconPlus}
              className={s.icons}
              alt="plus"
              onClick={() => dispatch(cartIncrAction(id))}
            />
          </div>
        </div>
      </div>
      <div className={s.price}>
        {discont_price === null ? (
          <div className={s.real_price}>
            <p>{price}</p>
            <p>$</p>
          </div>
        ) : (
          <div className={s.price_with_discount}>
            <div className={s.real_price}>
              <p>{discont_price}</p>
              <p>$</p>
            </div>
            <p className={s.discount_price}>{price}$</p>
          </div>
        )}
      </div>
    </div>
  );
}
