import React from "react";
import { Link } from "react-router-dom";
import s from "./ProductsItem.module.css";
import { BASE_URL } from "../../../config";
import BtnCard, { ButtonTypes } from "../../UI/btnCard/BtnCard";
import { addToCartAction } from "../../../store/actions/actions";
import { useDispatch } from "react-redux";
import Price from "../../UI/price/Price";

export default function ProductItem({ el }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(el));
  };

  return (
    <div className={s.products_wrapper}>
      <Link to={`/product/${el.id}`} className={s.products_link}>
        <img
          src={`${BASE_URL}${el.image}`}
          alt={el.title}
          className={s.products_img}
        />
      </Link>
      <div className={s.add_btn} onClick={handleAddToCart}>
        <BtnCard type={ButtonTypes.ADD_TO_CART} />
      </div>
      <div className={s.products_information}>
        <h3 className={s.products_title}>{el.title}</h3>

        <Price
          el={el}
          realPriceClass={s.real_price}
          oldPriceClass={s.old_price}
          saleValueClass={s.sale_value}
        />
      </div>
    </div>
  );
}
