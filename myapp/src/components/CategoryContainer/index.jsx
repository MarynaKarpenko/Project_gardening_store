import React, { useEffect, useState } from "react";
import s from "./CategoryContainer.module.css";
import CategoryItem from "../CategoryItem"
import { fetchCategories } from "../../Async/request";

export default function CategoryContainer({ limitItems }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchData();
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
