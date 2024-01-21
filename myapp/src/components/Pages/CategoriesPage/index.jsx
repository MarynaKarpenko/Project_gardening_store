import { useLocation } from "react-router-dom";
import BtnCategories from "../../BtnCard/BtnCategories";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import s_categories from "./Categories.module.css";
import CategoryContainer from "./CategoryContainer";

export default function CategoriesPage() {
  const location = useLocation();

  return (
    <div className={s_categories.categories_div}>
      <div className={s_categories.btn_container}>
        <BtnMainPage />
        <div className={s_categories.line}></div>
        <BtnCategories active={location.pathname === "/categories"} />
      </div>
      <h1>Categories</h1>
      <CategoryContainer limitItems={5} />
    </div>
  );
}