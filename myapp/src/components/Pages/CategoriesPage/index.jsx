import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fechCategories } from "../../../Async/request";
import CategoryContainer from "../../CategoryContainer";
import s from "./Categories.module.css";
import Breadcrumbs from "../../UI/Breadcrumbs";

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(fechCategories);
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
      <h1 className={s.categories_name}>Categories</h1>
      <div className={s.category_page}>
        <CategoryContainer categories={categories} />
      </div>
    </div>
  );
}
