import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  cartDecrAction,
  cartIncrAction,
} from "../../../store/reducers/cartReducer";
import iconMinus from "../../media/icons/Minus.svg";
import iconPlus from "../../media/icons/Plus.svg";
import s from "./Counter.module.css";

export default function Counter({ id, count }) {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(count || 1);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
    dispatch(cartIncrAction(id));
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCounter((prevCounter) => prevCounter - 1);
      dispatch(cartDecrAction(id));
    }
  };

  // const handleIncrement = () => {
  //   dispatch(cartIncrAction(id));
  // };

  // const handleDecrement = () => {
  //   dispatch(cartDecrAction(id));
  // };

  return (
    <div className={s.container}>
      <div className={s.price_counter}>
        <div className={s.icon_minus} onClick={handleDecrement}>
          <img src={iconMinus} alt="minus" />
        </div>
        <p className={s.counter}>{count}</p>
        <div className={s.icon_plus} onClick={handleIncrement}>
          <img src={iconPlus} alt="plus" />
        </div>
      </div>
    </div>
  );
}
