import React from "react";
import { Link } from "react-router-dom";

import s from "./ProductsItem.module.css";
import {BASE_URL} from "../../config"

export default function ProductItem({
  id,
  title,
  price,
  discont_price,
  image,
}) {
  const discount = Math.round(100 - (discont_price / price) * 100);


  
  return (
    <div className={s.products_item_wrapper}>
      <Link to={`/product/${id}`} className={s.products_link}>
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
