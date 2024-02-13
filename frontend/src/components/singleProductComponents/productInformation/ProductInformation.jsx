import React from "react";
import s from "./ProductInformation.module.css";
import Price from "../../UI/price/Price";
import Counter from "../../UI/counter/Counter";
import BtnCard, { ButtonTypes } from "../../UI/btnCard/BtnCard";

const ProductInformation = ({
  id,
  title,
  price,
  discont_price,
  handleAddToCart,
  count,
  description,
}) => (
  <div className={s.info}>
    <h3 className={s.title}>{title}</h3>
    <Price
      price={price}
      discont_price={discont_price}
      realPriceClass={s.real_price}
      oldPriceClass={s.old_price}
      saleValueClass={s.sale_value}
    />
    <div className={s.buttons}>
      <Counter id={id} count={count} />
      <div className={s.add_to_card} onClick={handleAddToCart}>
        <BtnCard type={ButtonTypes.ADD_TO_CART} />
      </div>
    </div>
    <div className={s.description}>
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ProductInformation;
