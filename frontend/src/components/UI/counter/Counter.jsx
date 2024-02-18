import React from "react";
import { useDispatch } from "react-redux";
import { cartDecrAction, cartIncrAction } from "../../../store/actions/actions";
import iconMinus from "../../media/icons/Minus.svg";
import iconPlus from "../../media/icons/Plus.svg";
import s from "./Counter.module.css";

export default function Counter({ el }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(cartIncrAction(el && el.id));
  };

  const handleDecrement = () => {
    if (el.count > 1) {
      dispatch(cartDecrAction(el && el.id));
    }
  };

  return (
    <div className={s.container}>
      <div className={s.price_counter}>
        <div className={s.icon_minus} onClick={handleDecrement}>
          <img src={iconMinus} alt="minus" />
        </div>
        <p className={s.counter}>{(el && el.count) || 1}</p>
        <div className={s.icon_plus} onClick={handleIncrement}>
          <img src={iconPlus} alt="plus" />
        </div>
      </div>
    </div>
  );
}
