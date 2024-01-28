import React, { useEffect } from "react";
import s from "./MainPage.module.css";
import BtnAllCategories from "../../BtnCard/BtnAllCategories";
import Banner from "../../Banner";
import DiscountForm from "../../DiscountForm";
import CategoriesPage from "../CategoriesPage";
import { useDispatch, useSelector } from "react-redux";
import { fechCategories, fechSalesProducts } from "../../../Async/request";
import ProductsContainer from "../../ProductsContainer"
import CategoryContainer from "../../CategoryContainer";
import BtnAllSales from "../../BtnCard/BtnAllSales";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fechCategories);
    dispatch(fechSalesProducts);
  }, []);
  const categories_state = useSelector((state) => state.catalog);

  const categories = categories_state.filter(({ id }) => id <= 4);

  const salesProducts = useSelector((state) => state.productsWithdiscount);

  const getRandom = () =>
    Math.round(Math.random() * (salesProducts.length - 1));

  const randomState = salesProducts
    .map((el) => ({ ...el, random: getRandom() }))
    .sort((a, b) => a.random - b.random)
    .filter((el, i) => i < 4);

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
          </div>
          <CategoryContainer categories={categories} />
          <DiscountForm />
          <div className={s.title_container}>
            <h1 className={s.categories_h1}>Sale</h1>
            <div className={s.line}></div>
            <BtnAllSales />
          </div>
          <ProductsContainer products={randomState} />
        </div>
      </div>
    </div>
  );
}
