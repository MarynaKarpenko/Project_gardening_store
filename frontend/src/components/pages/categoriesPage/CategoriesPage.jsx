import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../../asyncActions/products";
import CategoryContainer from "../../categoriesComponents/categoryContainer/CategoryContainer";
import s from "./Categories.module.css";
import Breadcrumbs from "../../UI/breadcrumbs/Breadcrumbs";

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories);
  }, []);

  const breadcrumbs = [
    { label: "Main page", path: "/" },
    { label: "Categories", path: "/categories", active: true },
  ];

  return (
    <div className={s.categories_div}>
      <div className={s.btn_container}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <h1 className={s.products_name}>Categories</h1>
      <div className={s.category_page}>
        <CategoryContainer categories={categories} />
      </div>
    </div>
  );
}
