import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchSalesProducts } from "../../../asyncActions/products";
import s from "./MainPage.module.css";
import Banner from "../../homeComponents/banner/Banner";
import DiscountForm from "../../homeComponents/discountForm/DiscountForm";
import ProductsContainer from "../../productsComponents/productsContainer/ProductsContainer";
import CategoryContainer from "../../categoriesComponents/categoryContainer/CategoryContainer";
import TitleAndBreadCrumbs from "../../UI/titleAndBreadcrumbs/TitleAndBreadCrumbs";

export default function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories);
    dispatch(fetchSalesProducts);
  }, []);
  const categories_state = useSelector((state) => state.categories);

  const categories = categories_state.filter(({ id }) => id <= 4);

  const salesProducts = useSelector((state) => state.productsWithDiscount);

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
    <div className={s.container}>
      <Banner />
      <div className={s.content}>
        <TitleAndBreadCrumbs
          title="Categories"
          breadcrumbs={breadcrumbsCategories}
        />
        <CategoryContainer categories={categories} />
        <DiscountForm />
        <TitleAndBreadCrumbs title="Sale" breadcrumbs={breadcrumbsSales} />
        <ProductsContainer products={randomState} />
      </div>
    </div>
  );
}
