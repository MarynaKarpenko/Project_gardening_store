import React from "react";
import { Link } from "react-router-dom";
import s from "./ProductsItem.module.css";

const BASE_URL = "http://localhost:3333";

export default function ProductItem({
  id,
  title,
  price,
  discont_price,
  image,
}) {
  console.log("Product in ProductItem:", {
    id,
    title,
    price,
    discont_price,
    image,
  });

  const hasDiscount = discont_price !== null;
  const discount = hasDiscount
    ? Math.round(((price - discont_price) / price) * 100)
    : null;

  return (
    <div className={s.products_item_wrapper}>
      <Link to={`/product/:id`} className={s.products_link}>
        <div className={s.products_img_container}>
          <img
            src={`${BASE_URL}${image}`}
            alt={title}
            className={s.products_img}
          />
        </div>

        <div className={s.products_information}>
          <h3 className={s.products_title}>{title}</h3>
          <div className={s.price_container}>
            {hasDiscount ? (
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
