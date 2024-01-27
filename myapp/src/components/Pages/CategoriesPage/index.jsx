import { useLocation } from "react-router-dom";
import BtnCategories from "../../BtnCard/BtnCategories";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import CategoryContainer from "../../CategoryContainer";
import s from "./Categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fechCategories } from "../../../Async/request";

export default function CategoriesPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.catalog);
  useEffect(() => {
    dispatch(fechCategories);
  }, []);
  return (
    <div className={s.categories_div}>
      <div className={s.btn_container}>
        <BtnMainPage />
        <div className={s.line}></div>
        <BtnCategories active={location.pathname === "/categories"} />
      </div>
      <h1>Categories</h1>
      <CategoryContainer categories={categories}/>
    </div>
  );
}
