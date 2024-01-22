import React from "react";
import { Link } from "react-router-dom";
import s_categories from "../Categories.module.css";

const BASE_URL = "http://localhost:3333";

export default function CategoryItem({ category }) {
  if (!category) {
    return null;
  }

  return (
    <div className={s_categories.categories_set}>
      <Link
        to={`/products/${category.id}`}
        className={s_categories.category_link}
      >
        <img
          src={`${BASE_URL}${category.image || ""}`}
          alt={category.title || "Category"}
          className={s_categories.category_image}
        />
        <p>{category.title}</p>
      </Link>
    </div>
  );
}
