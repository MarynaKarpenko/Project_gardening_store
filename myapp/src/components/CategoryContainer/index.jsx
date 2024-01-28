import s from "./CategoryContainer.module.css";
import CategoryItem from "../CategoryItem";
import { Link } from "react-router-dom";

export default function CategoryContainer({ categories }) {
  return (
    <div className={s.categories_container}>
      <Link to={"categories/:id"} className={s.container_link}>
        {categories.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </Link>
    </div>
  );
}
