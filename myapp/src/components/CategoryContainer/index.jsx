import s from "./CategoryContainer.module.css";
import CategoryItem from "../CategoryItem";
import { Link } from "react-router-dom";

export default function CategoryContainer({ categories }) {
  return (
    <div>
      <Link to={"categories/:id"}>
        {categories.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </Link>
    </div>
  );
}
