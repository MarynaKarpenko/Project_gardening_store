import { useLocation, useParams } from "react-router-dom";
import BtnCategories from "../../BtnCard/BtnCategories";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import BtnToolsAndEquipment from "../../BtnCard/BtnToolsAndEquipment";
import s from "./ToolEquimentPage.module.css"
import Filter from "../../Filter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsByCategory } from "../../../Async/request";
import ProductsContainer from "../../ProductsContainer";

export default function ToolEquipmentPage() {

  const location = useLocation();
  const dispatch = useDispatch();
  const { name } = useParams();
  const products_by_categiry = useSelector((state) => state.productsByCategory);

  useEffect(() => {
    fetchProductsByCategory(name, dispatch);
  }, [dispatch, name]);
  
  return (
    <div>
      <div className={s.btn_container}>
        <BtnMainPage />
        <div className={s.line}></div>
        <BtnCategories />
        <div className={s.line}></div>
        <BtnToolsAndEquipment
          active={location.pathname === "/categories/:name"}
        />
      </div>
      <h1>Tools and equipment</h1>
      <Filter />
      <ProductsContainer products={products_by_categiry} />
    </div>
  );
}
