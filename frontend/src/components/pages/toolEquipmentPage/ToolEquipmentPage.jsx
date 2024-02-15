import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNameOfCategory, fetchProductsByCategory } from "../../../asyncActions/products";
import {
  filterByPriceAction,
  productsWithDiscountAction,
  sortProductsAction,
} from "../../../store/actions/actions";
import Filter from "../../UI/filters/MainFilter";
import ProductsContainer from "../../productsComponents/productsContainer/ProductsContainer";
import Breadcrumbs from "../../UI/breadcrumbs/Breadcrumbs";
import s from "./ToolEquipmentPage.module.css";

export default function ToolEquipmentPage() {
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsByCategory(name));
    dispatch(fetchNameOfCategory(name));
  }, []);
  const products_state = useSelector((state) => state.productsByCategory);
  const title = useSelector((state) => state.nameOfCategory.title);

  const filterBySale = (e) => dispatch(productsWithDiscountAction(e.target.checked));

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
      <Filter filterBySale={filterBySale} sale={false} sort={sort} filterByPrice={filterByPrice} />
      <ProductsContainer products={products_state} />
    </div>
  );
}
