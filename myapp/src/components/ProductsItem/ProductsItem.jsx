import React from "react";
import { Link } from "react-router-dom";
import s from "./ProductsItem.module.css";
import { BASE_URL } from "../../config";
import BtnCard, { ButtonTypes } from "../UI/BtnCard";
import { addToCartAction } from "../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";

export default function ProductItem({
  id,
  title,
  price,
  discont_price,
  image,
}) {
  const dispatch = useDispatch();
  const discount = Math.round(100 - (discont_price / price) * 100);
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartAction({ id, title, price, discont_price, image }));
  };

  return (
    <div className={s.products_wrapper}>
      <Link to={`/product/${id}`} className={s.products_link}>
        <img
          src={`${BASE_URL}${image}`}
          alt={title}
          className={s.products_img}
        />
        <div className={s.add_btn} onClick={handleAddToCart}>
          <BtnCard type={ButtonTypes.ADD_TO_CART} />
        </div>

        <div className={s.products_information}>
          <div className={s.products_title_container}>
            <h3 className={s.products_title}>{title}</h3>
          </div>
          <div className={s.price_container}>
            {discont_price ? (
              <div className={s.price_with_discount}>
                <div className={s.real_price}>
                  <p>${discont_price}</p>
                </div>
                <p className={s.old_price}>{price}$</p>
                <div>
                  <p className={s.sale_value}>-{discount}%</p>
                </div>
              </div>
            ) : (
              <div className={s.real_price}>
                <p>${price}</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
