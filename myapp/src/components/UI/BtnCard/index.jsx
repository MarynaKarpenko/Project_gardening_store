import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../store/reducers/cartReducer";
import s from "./BtnCard.module.css";
import { Link } from "react-router-dom";

export const ButtonTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  DISCOUNT: "DISCOUNT",
  CHECK_OUT: "CHECK_OUT",
  ORDER: "ORDER",
  GO_HOME: "GO_HOME",
};

export default function BtnCard({
  type,
  id,
  title,
  price,
  discont_price,
  image,
  onSubmit,
}) {
  const dispatch = useDispatch();
  const [buttonState, setButtonState] = useState("normal");

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartAction({ id, title, price, discont_price, image }));
  };

  const handleDiscountSubmit = async (event) => {
    event.preventDefault();
    setButtonState("Request Submitted");
    onSubmit(event);
  };

  return (
    <div className={s.card_btn}>
      {type === ButtonTypes.ADD_TO_CART && (
        <button className={s.add_btn} onClick={handleAddToCart}>
          Add to cart
        </button>
      )}

      {type === ButtonTypes.DISCOUNT && (
        <button
          type="submit"
          className={`${s.btn_discount} ${
            buttonState === "Request Submitted" ? s.btn_active : ""
          }`}
          onClick={handleDiscountSubmit}
          disabled={buttonState !== "normal"}
        >
          {buttonState === "Request Submitted"
            ? "Request Submitted"
            : "Get a discount"}
        </button>
      )}

      {type === ButtonTypes.CHECK_OUT && (
        <Link to={"/sales"}>
          <button>Check out</button>
        </Link>
      )}
      {type === ButtonTypes.GO_HOME && (
        <Link to={"/"}>
          <button className={s.btn_home_picture}>Go home</button>
        </Link>
      )}
    </div>
  );
}
