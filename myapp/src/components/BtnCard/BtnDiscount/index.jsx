import React, { useState, useEffect } from "react";
import s from "./BtnDiscount.module.css";

export default function BtnDiscount({ onSubmit }) {
  const [buttonState, setButtonState] = useState("normal");

  const handleSubmit = async (event) => {
    event.preventDefault();

    onSubmit(event);
    setButtonState("Request Submitted");
  };

  useEffect(() => {
    if (buttonState === "Request Submitted") {
      const timeoutId = setTimeout(() => {
        setButtonState("normal");
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [buttonState]);

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
