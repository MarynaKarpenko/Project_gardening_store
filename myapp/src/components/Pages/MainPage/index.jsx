import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechCategories, fechSalesProducts } from "../../../Async/request";
import s from "./MainPage.module.css";
import Banner from "../../Banner";
import DiscountForm from "../../DiscountForm";
import ProductsContainer from "../../ProductsContainer";
import CategoryContainer from "../../CategoryContainer";
import Breadcrumbs from "../../UI/Breadcrumbs";

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

  const breadcrumbsCategories = [
    { label: "All categories", path: "/categories" },
  ];

  const breadcrumbsSales = [{ label: "All sales", path: "/sales" }];

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
              <Breadcrumbs breadcrumbs={breadcrumbsCategories} />
            </div>
          </div>
          <CategoryContainer categories={categories} />
          <DiscountForm />
          <div className={s.title_container}>
            <h1 className={s.categories_h1}>Sale</h1>
            <div className={s.line}></div>
            <Breadcrumbs breadcrumbs={breadcrumbsSales} />
          </div>
          <ProductsContainer products={randomState} />
        </div>
      </div>
    </div>
  );
}
