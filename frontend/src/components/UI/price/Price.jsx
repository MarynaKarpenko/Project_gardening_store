import React from "react";
import s from "./Price.module.css";

export default function Price({
  price,
  discont_price,
  realPriceClass,
  oldPriceClass,
  saleValueClass,
}) {
  const discount = Math.round(100 - (discont_price / price) * 100);
  return (
    <div className={s.price_container}>
      {discont_price ? (
        <div className={s.price_with_discount}>
          <p className={`${realPriceClass} ${s.real_price}`}>
            ${discont_price}
          </p>
          <p className={`${oldPriceClass} ${s.old_price}`}>{price}$</p>
          <div>
            <p className={`${saleValueClass} ${s.sale_value}`}>-{discount}%</p>
          </div>
        </div>
      ) : (
        <div className={`${realPriceClass} ${s.real_price}`}>
          <p>${price}</p>
        </div>
      )}
    </div>
  );
}
