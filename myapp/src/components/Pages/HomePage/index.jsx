import s_home_page from "./HomePage.module.css";
import BtnBanner from "./BtnBanner";
import BtnAllCategories from "../../BtnCard/BtnAllCategories";
import DiscountForm from "./DiscountForm";
import CategoryContainer from "../CategoriesPage/CategoryContainer";

export default function HomePage() {
  return (
    <div>
      <BtnBanner />
      <div>
        <div className={s_home_page.title_container}>
          <h1 className={s_home_page.categories_h1}>Categories</h1>
          <div className={s_home_page.line}></div>
          <BtnAllCategories />
        </div>
        <CategoryContainer limitItems={4} />
      </div>
      <DiscountForm />
      <h1>Sale</h1>
    </div>
  );
}
