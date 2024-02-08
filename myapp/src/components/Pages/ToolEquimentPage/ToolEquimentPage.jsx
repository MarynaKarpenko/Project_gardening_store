import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fechNameOfCategory,
  fechProductsByCategory,
} from "../../../Async/request";
import {
  filterByPriceAction,
  productsWithDiscountAction,
  sortProductsAction,
} from "../../../store/reducers/productsReducer";
import Filter from "../../filter/Filter";
import ProductsContainer from "../../productsContainer/ProductsContainer";
import Breadcrumbs from "../../UI/Breadcrumbs";
import s from "./ToolEquimentPage.module.css";

export default function ToolEquipmentPage() {
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fechProductsByCategory(name));
    dispatch(fechNameOfCategory(name));
  }, []);
  const products_state = useSelector((state) => state.productsByCategory);
  const title = useSelector((state) => state.nameOfCategory.title);

  const filterBySale = (e) =>
    dispatch(productsWithDiscountAction(e.target.checked));

  const sort = (e) => {
    dispatch(sortProductsAction(e.target.value));
  };
  const filterByPrice = (e) => {
    e.preventDefault();
    const { min_price, max_price } = e.target.parentElement;
    const min_value = min_price.value || 0;
    const max_value = max_price.value || Infinity;
    dispatch(filterByPriceAction({ min_value, max_value }));
  };

  const breadcrumbs = [
    { label: "Main page", path: "/" },
    { label: "Categories", path: "/categories" },
    { label: `${title}`, path: `/categories/${name}`, active: true },
  ];

  return (
    <div className={s.category_wrapper}>
      <div className={s.btn_container}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <h1 className={s.products_name}>{title}</h1>
      <Filter
        filterBySale={filterBySale}
        sale={false}
        sort={sort}
        filterByPrice={filterByPrice}
      />
      <ProductsContainer products={products_state} />
    </div>
  );
}
