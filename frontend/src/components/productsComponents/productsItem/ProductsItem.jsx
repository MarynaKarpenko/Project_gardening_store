import React from "react";
import { Link } from "react-router-dom";
import s from "./ProductsItem.module.css";
import { BASE_URL } from "../../../config";
import BtnCard, { ButtonTypes } from "../../UI/btnCard/BtnCard";
import { addToCartAction } from "../../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";
import Price from "../../UI/price/Price";

export default function ProductItem({ id, title, price, discont_price, image }) {
  const dispatch = useDispatch();

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
      </Link>
      <div className={s.add_btn} onClick={handleAddToCart}>
        <BtnCard type={ButtonTypes.ADD_TO_CART} />
      </div>
      <div className={s.products_information}>
        <h3 className={s.products_title}>{title}</h3>

        <Price
          price={price}
          discont_price={discont_price}
          realPriceClass={s.real_price}
          oldPriceClass={s.old_price}
          saleValueClass={s.sale_value}
        />
      </div>
    </div>
  );
};
