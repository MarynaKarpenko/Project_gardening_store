import s from "./CategoryContainer.module.css";
import CategoryItem from "../CategoryItem";

export default function CategoryContainer({ categories }) {
  return (
    <div className={s.categories_container}>
      {categories.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}
