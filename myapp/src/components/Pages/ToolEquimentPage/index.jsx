import { useLocation } from "react-router-dom";
import BtnCategories from "../../BtnCard/BtnCategories";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import BtnToolsAndEquipment from "../../BtnCard/BtnToolsAndEquipment";
import s from "./ToolEquimentPage.module.css"

export default function ToolEquipmentPage() {
  const location = useLocation();
  return (
    <div>
      <div className={s.btn_container}>
        <BtnMainPage />
        <div className={s.line}></div>
        <BtnCategories />
        <div className={s.line}></div>
        <BtnToolsAndEquipment
          active={location.pathname === "/products/:categoryName"}
        />
      </div>
      <h1>Tools and equipment</h1>
    </div>
  );
}
