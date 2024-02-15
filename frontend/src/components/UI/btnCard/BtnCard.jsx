import React, { useState } from "react";
import s from "./BtnCard.module.css";
import { Link } from "react-router-dom";

export const ButtonTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  CHECK_OUT: "CHECK_OUT",
  GO_HOME: "GO_HOME",
  SHOPPING: "SHOPPING",
};

export default function BtnCard({ type }) {
  const [isHovered, setHovered] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isThirdState, setThirdState] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleClick = () => {
    setSubmitting(true);
    setThirdState(true);
  };

  let buttonClass = s.card_btn;

  if (type === ButtonTypes.ADD_TO_CART) {
    buttonClass += ` ${s.add_btn}`;
  } else if (
    type === ButtonTypes.CHECK_OUT ||
    type === ButtonTypes.GO_HOME ||
    type === ButtonTypes.SHOPPING
  ) {
    buttonClass += ` ${s.btn_green}`;
  }

  if (isHovered) {
    buttonClass += ` ${s.hovered}`;
  }

  if (isSubmitting) {
    buttonClass += ` ${s.submitting}`;
  }

  if (isThirdState) {
    buttonClass += ` ${s.thirdState}`;
  }

  return (
    <div className={buttonClass}>
      {type === ButtonTypes.ADD_TO_CART && (
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className={s.add_btn}
        >
          {isSubmitting ? "Added" : isHovered ? "Add to cart" : "Add to cart"}
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
