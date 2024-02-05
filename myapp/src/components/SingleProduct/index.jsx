import React, { useState } from "react";
import { BASE_URL } from "../../config";
import { useDispatch } from "react-redux";
import {
  addToCartAction,
  cartDecrAction,
  cartIncrAction,
} from "../../store/reducers/cartReducer";
import s from "./SingleProduct.module.css";
import iconPlus from "../Icons/Plus.svg";
import iconMinus from "../Icons/Minus.svg";
import Breadcrumbs from "../UI/Breadcrumbs";
import BtnCard, { ButtonTypes } from "../UI/BtnCard";

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

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartAction({ id, title, price, discont_price, image }));
  };

  const breadcrumbs = [
    { label: "Main page", path: "/" },
    { label: "Categories", path: "/categories" },
    { label: "All products", path: "/products" },
    { label: `${title}`, path: `/product/${id}`, active: true },
  ];

  return (
    <div className={s.product_wrapper}>
      <div className={s.btn_container}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <h3 className={s.title_480}>{title}</h3>
      <div className={s.container}>
        <div className={s.image}>
          <img src={`${BASE_URL}/${image}`} alt={title} />
        </div>
        <div className={s.info}>
          <h3 className={s.title}>{title}</h3>
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
            <div className={s.btn_plus_minus}>
              <button onClick={handleDecrement} className={s.btn_counter_minus}>
                <img src={iconMinus} alt="Minus" />
              </button>
              <p className={s.counter}>{counter}</p>
              <button onClick={handleIncrement} className={s.btn_counter_plus}>
                <img src={iconPlus} alt="Plus" />
              </button>
            </div>
            <div className={s.add_to_card} onClick={handleAddToCart}>
              <BtnCard type={ButtonTypes.ADD_TO_CART} />
            </div>
          </div>
          <div className={s.description}>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className={s.description2}>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
