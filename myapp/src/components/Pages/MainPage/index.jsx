import React from "react";
import s from "./MainPage.module.css";
import BtnAllCategories from "../../BtnCard/BtnAllCategories";
import Banner from "../../Banner";
import DiscountForm from "../../DiscountForm";
import CategoriesPage from "../CategoriesPage";

export default function MainPage() {
  return (
    <div>
      <div className={s.banner}>
        <Banner />
      </div>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.home}>
            <div className={s.title_container}>
              <h1 className={s.categories_h1}>Categories</h1>
              <div className={s.line}></div>
              <BtnAllCategories />
            </div>
            <CategoriesPage limitItems={4} />
          </div>
          <DiscountForm />
          <h1>Sale</h1>
        </div>
      </div>
    </div>
  );
}
