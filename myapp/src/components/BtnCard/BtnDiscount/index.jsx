import React, {useState} from "react";
import s from "./BtnDiscount.module.css";

export default function BtnDiscount({ onSubmit }) {
  const [buttonState, setButtonState] = useState("normal");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonState("Request Submitted");
    onSubmit(event);
  };

  return (
    <div>
      <button
        type="submit"
        className={`${s.btn_discount} ${
          buttonState === "Request Submitted" ? s.btn_active : ""
        }`}
        onClick={handleSubmit}
        disabled={buttonState !== "normal"}
      >
        {buttonState === "Request Submitted"
          ? "Request Submitted"
          : "Get a discount"}
      </button>
    </div>
  );
}
