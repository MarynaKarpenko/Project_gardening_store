import { useEffect, useState } from "react";
import s from "./HomeCategories.module.css";
import { Link } from "react-router-dom";

export default function HomeCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/categories/all")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const displayedCategories = categories.slice(0, 4);

  return (
    <div className={s.categories_page}>
      {displayedCategories.map((elem) => (
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
