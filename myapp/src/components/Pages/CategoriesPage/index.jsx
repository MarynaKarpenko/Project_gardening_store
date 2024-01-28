import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fechCategories } from "../../../Async/request";
import BtnCategories from "../../BtnCard/BtnCategories";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import CategoryContainer from "../../CategoryContainer";
import s from "./Categories.module.css";

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

        <BtnCategories active={location.pathname.startsWith("/categories")} />
      </div>

      <h1 className={s.categories_name}>Categories</h1>
      <div className={s.category_page}>
        <CategoryContainer categories={categories} />
      </div>
    </div>
  );
}
