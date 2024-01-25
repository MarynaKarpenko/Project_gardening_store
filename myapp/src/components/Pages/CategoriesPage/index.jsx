import { useLocation } from "react-router-dom";
import BtnCategories from "../../BtnCard/BtnCategories";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import CategoryContainer from "../../CategoryContainer"
import s from "./Categories.module.css";

export default function CategoriesPage() {

  const location = useLocation();

  return (
    <div className={s.categories_div}>
      <div className={s.btn_container}>
        <BtnMainPage />
        <div className={s.line}></div>
        <BtnCategories active={location.pathname === "/categories"} />
      </div>
      <h1>Categories</h1>
      <CategoryContainer />
    </div>
  );
}