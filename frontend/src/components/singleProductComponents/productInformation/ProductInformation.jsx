import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../../store/actions/actions";
import s from "./ProductInformation.module.css";
import Price from "../../UI/price/Price";
import Counter from "../../UI/counter/Counter";
import BtnCard, { ButtonTypes } from "../../UI/btnCard/BtnCard";

const ProductInformation = ({ el }) => {
  const basketCart = useSelector((state) => state.cart);
  const product = basketCart.find((element) => element.id === el.id);
  // const count = product && product.count;
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartAction(el));
  };

  return (
    <div className={s.info}>
      <h3 className={s.title}>{el.title}</h3>
      <Price
        el={el}
        realPriceClass={s.real_price}
        oldPriceClass={s.old_price}
        saleValueClass={s.sale_value}
      />
      <div className={s.buttons}>
        <Counter el={product && product} />
        <div className={s.add_to_card} onClick={handleAddToCart}>
          <BtnCard type={ButtonTypes.ADD_TO_CART} />
        </div>
      </div>
      <div className={s.description}>
        <h3>Description</h3>
        <p>{el.description}</p>
      </div>
    </div>
  );
};

export default ProductInformation;
