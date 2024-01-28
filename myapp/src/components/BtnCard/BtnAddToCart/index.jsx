import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../store/reducers/cartReducer";
import s from "./BtnAddToCart.module.css"

export default function BtnAddToCart({ id, title, price, discont_price, image }) {
  const dispatch = useDispatch();

  const add_to_cart = (e) => {
    e.preventDefault();
    dispatch(addToCartAction({ id, title, price, discont_price, image }));
  };
  
  return (
      <button className={s.add_btn} onClick={add_to_cart}>
        Add to cart
      </button>
  );
}
