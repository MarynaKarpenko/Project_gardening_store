import BtnMainPage from "../../BtnCard/BtnMainPage";
import BtnAllSales from "../../BtnCard/BtnAllSales";
import s from "./DiscountsPage.module.css";
import { useLocation } from "react-router-dom";

export default function DiscountsPage() {
  const location = useLocation();
  return (
    <div className={s.discounted_wrapper}>
      <div className={s.btn_container}>
        <BtnMainPage />
        <div className={s.line}></div>
        <BtnAllSales active={location.pathname === "/sales"} />
      </div>
      <h1>Discounted items</h1>
    </div>
  );
}