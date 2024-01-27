import React from "react";
import { useDispatch } from "react-redux";
import {addToCartAction} from "../../store/reducers/cartReducer"
import {BASE_URL} from "../../config"
import s from "./SingleProduct.module.css"

export default function SingleProduct({
  id,
  title,
  price,
  discont_price,
  description,
  image,
}) {
    
  const discount = Math.round(100 - (discont_price / price) * 100);
  const dispatch = useDispatch();
  const add_to_cart = () =>
    dispatch(addToCartAction({ id, title, price, discont_price, image }));

  return (
    <div>
      <h3>{title}</h3>
      <div className={s.container}>
        <div className={s.image}>
          <img src={`${BASE_URL}/${image}`} alt={title} />
        </div>

        <div className={s.info}>
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
          <div className={s.add_cart} onClick={add_to_cart}>
            To cart
          </div>
          <div className={s.description}>
            <p>Description</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
