import { useEffect, useState } from "react";
import s from "../Categories.module.css";
import { Link } from "react-router-dom";

export default function CategoryContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/categories/all")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className={s.categories_page}>
      {categories.map((elem) => (
        <div key={elem.id} className={s.categories_set}>
          <Link to={`/products`}>
            <img
              src={`http://localhost:3333${elem.image}`}
              alt={elem.title}
              className={s.category_image}
            />
          </Link>
          <p>
            <Link to={`/products`} className={s.category_title}>
              {elem.title}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
}
