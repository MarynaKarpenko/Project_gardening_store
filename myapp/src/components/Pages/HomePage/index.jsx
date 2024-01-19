import s from './HomePage.module.css'
import BtnBanner from "./BtnBanner";
import BtnAllCategories from "../../BtnCard/BtnAllCategories";
import HomeCategories from './HomeCategories';
import DiscountForm from './DiscountForm';

export default function HomePage() {
  return (
    <div>
      <BtnBanner />
      <div>
        <div className={s.title_container}>
          <h1 className={s.categories_h1}>Categories</h1>
          <div className={s.line}></div>
          <BtnAllCategories />
        </div>
        <HomeCategories />
      </div>
      <DiscountForm/>
      <h1>Sale</h1>
    </div>
  );
}
