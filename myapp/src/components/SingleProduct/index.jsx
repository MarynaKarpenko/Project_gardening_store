import React, { useState } from "react";
import { BASE_URL } from "../../config";
import { useDispatch } from "react-redux";
import {
  cartDecrAction,
  cartIncrAction,
} from "../../store/reducers/cartReducer";
import s from "./SingleProduct.module.css";
import BtnAddToCart from "../BtnCard/BtnAddToCart";
import iconPlus from "../Icons/Plus.svg";
import iconMinus from "../Icons/Minus.svg";
import Breadcrumbs from "../UI/Breadcrumbs";

export default function SingleProduct({
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
  const [counter, setCounter] = useState(count || 1);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
    dispatch(cartIncrAction(id));
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter((prevCounter) => prevCounter - 1);
      dispatch(cartDecrAction(id));
    }
  };

  const breadcrumbs = [
    { label: "Main page", path: "/" },
    { label: "Categories", path: "/categories" },
    { label: "Tools and equipment", path: "/categories/:name" },
    { label: `${title}`, path: `/product/${id}`, active: true },
  ];

  return (
    <div className={s.product_wrapper}>
      <div className={s.btn_container}>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
      </div>

      <div className={s.container}>
        <div className={s.image}>
          <img src={`${BASE_URL}/${image}`} alt={title} />
        </div>
        <div className={s.info}>
          <h3>{title}</h3>

          <div className={s.price_container}>
            {discont_price ? (
              <div className={s.price_with_discount}>
                <div className={s.real_price}>
                  <p>${discont_price}</p>
                </div>
                <p className={s.old_price}>{price}$</p>
                <div className={s.sale}>
                  <p className={s.sale_value}>-{discount}%</p>
                </div>
              </div>
            ) : (
              <div className={s.real_price}>
                <p>${price}</p>
              </div>
            )}
          </div>

          <div className={s.buttons}>
            <button onClick={handleDecrement} className={s.btn_counter}>
              <img src={iconMinus} className={s.icons} alt="Minus" />
            </button>
            <p className={s.counter}>{counter}</p>
            <button onClick={handleIncrement} className={s.btn_counter}>
              <img src={iconPlus} className={s.icons} alt="Plus" />
            </button>
            <div className={s.buttun_add_to_card}>
              <BtnAddToCart />
            </div>
          </div>

          <div className={s.description}>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
