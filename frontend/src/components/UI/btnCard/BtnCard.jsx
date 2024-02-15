import React, { useState } from "react";
import s from "./BtnCard.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const ButtonTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  CHECK_OUT: "CHECK_OUT",
  GO_HOME: "GO_HOME",
  SHOPPING: "SHOPPING",
};

export default function BtnCard({ type }) {
  const [isSubmitting, setSubmitting] = useState(false);

  const handleClick = () => {
    if (type === ButtonTypes.ADD_TO_CART) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
      }, 2000);
    } 
  };

  const buttonClass = classNames(s.card_btn, {
    [s.add_btn]: type === ButtonTypes.ADD_TO_CART,
    [s.submitted]: isSubmitting,
    [s.btn_green]:
      type === ButtonTypes.CHECK_OUT ||
      type === ButtonTypes.GO_HOME ||
      type === ButtonTypes.SHOPPING,
  });

  return (
    <div className={buttonClass}>
      {type === ButtonTypes.ADD_TO_CART && (
        <button onClick={handleClick} className={s.add_btn}>
          {isSubmitting ? "Added" : "Add to cart"}
        </button>
      )}

      {type === ButtonTypes.CHECK_OUT && (
        <Link to={"/sales"}>
          <button className={s.btn_green}>Check out</button>
        </Link>
      )}

      {type === ButtonTypes.GO_HOME && (
        <Link to={"/"}>
          <button className={s.btn_green}>Go home</button>
        </Link>
      )}

      {type === ButtonTypes.SHOPPING && (
        <Link to={"/"}>
          <button className={s.btn_green}>Continue Shopping</button>
        </Link>
      )}
    </div>
  );
}