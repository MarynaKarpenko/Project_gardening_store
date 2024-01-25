import React from "react";
import { Link } from "react-router-dom";
import s from "./CategoryItem.module.css";

const BASE_URL = "http://localhost:3333";

export default function CategoryItem({ category }) {
  if (!category) {
    return null;
  }

  const categoryUrl = `/categories/${encodeURIComponent(category.title)}`;

  return (
    <div className={s.categories_set}>
      <Link to={categoryUrl} className={s.category_link}>
        <img
          src={`${BASE_URL}${category.image || ""}`}
          alt={category.title || "Category"}
          className={s.category_image}
        />
        <p>{category.title}</p>
      </Link>
    </div>
  );
}
