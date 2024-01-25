import s from "./HomePage.module.css";
import BtnBanner from "./BtnBanner";
import BtnAllCategories from "../../BtnCard/BtnAllCategories";
import DiscountForm from "./DiscountForm";
import CategoryContainer from "../CategoriesPage/CategoryContainer";

export default function HomePage() {
  return (
    <div className={s.container}>
      <BtnBanner />
      <div className={s.content}>
        <div className={s.home}>
          <div className={s.title_container}>
            <h1 className={s.categories_h1}>Categories</h1>
            <div className={s.line}></div>
              <BtnAllCategories />
          </div>
          <CategoryContainer limitItems={4} />
        </div>
        <DiscountForm />
        <h1>Sale</h1>
      </div>
    </div>
  );
}
