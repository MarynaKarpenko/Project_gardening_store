import React from "react";
import { useDispatch } from "react-redux";
import { removeCartAction } from "../../../store/reducers/cartReducer";
import { BASE_URL } from "../../../config";
import s from "./CartItem.module.css";
import iconCross from "../../media/icons/IconCross.svg";
import Counter from "../../UI/counter/Counter";
import { Link } from "react-router-dom";
import Price from "../../UI/price/Price";

export default function CartItem({ array }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeCartAction(id));
  };
   

  return (
    <>
      {array.map((el) => (
        <div key={el.id} className={s.cart}>
          <img
            src={iconCross}
            className={s.cross_delete}
            alt="cross"
            onClick={() => handleRemoveFromCart(el.id)}
          />
          <div className={s.product_info}>
            <img
              src={`${BASE_URL}/${el.image}`}
              alt="img"
              className={s.shopping_img}
            />
            <div className={s.products}>
              <Link to={`/product/${el.id}`} className={s.products_link}>
                <p className={s.product_name}>{el.title}</p>
              </Link>
              <div className={s.container}>
                <Counter id={el.id} count={el.count} />
                <Price
                  price={el.price}
                  discont_price={el.discont_price}
                  realPriceClass={s.real_price}
                  oldPriceClass={s.old_price}
                  saleValueClass={s.sale_value}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
