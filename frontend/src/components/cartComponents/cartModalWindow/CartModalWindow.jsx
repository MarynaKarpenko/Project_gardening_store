import React from "react";
import { useDispatch } from "react-redux";
import s from "./CartModalWindow.module.css";
import iconCross from "../../media/icons/IconCross.svg";
import { sendOrderAction } from "../../../store/reducers/cartReducer";

export default function CartModalWindow({ sendingOrder, setSendingOrder }) {
  const dispatch = useDispatch();

  const closeWindow = () => {
    dispatch(sendOrderAction());
    setSendingOrder(false);
  };

  return (
    <div className={sendingOrder ? `${s.modal_container} ` : `${s.modal_close} `}>
      <div className={s.modal_window}>
        <div className={s.txt_container}>
          <h4 className={s.title}>Congratulations!</h4>
          <img src={iconCross} onClick={() => closeWindow()} className={s.btn_close} />
        </div>
        <p className={s.modal_txt}>
          Your order has been successfully placed on the website.
          <br />
          <br />A manager will contact you shortly to confirm your order.
        </p>
      </div>
    </div>
  );
}
