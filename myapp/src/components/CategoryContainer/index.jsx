import React, { useEffect, useState } from "react";
import s from "./CategoryContainer.module.css";
import CategoryItem from "../CategoryItem"

const BASE_URL = "http://localhost:3333";

export default function CategoryContainer({ limitItems }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/categories/all`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  const displayedCategories = limitItems
    ? categories.slice(0, limitItems)
    : categories;

  return (
    <div className={s.categories_page}>
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        displayedCategories.map((elem) => (
          <CategoryItem key={elem.id} category={elem} />
        ))
      )}
    </div>
  );
}
