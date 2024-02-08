import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechAllProducts } from "../../../Async/request";
import {
  allProductsWithDiscountAction,
  filterByPriceAction,
  sortProductsAction,
} from "../../../store/reducers/productsReducer";
import Breadcrumbs from "../../UI/Breadcrumbs";
import ProductsContainer from "../../productsContainer/ProductsContainer";
import Filter from "../../filter/Filter";
import s from "./AllProductsPage.module.css";

export default function AllProductsPage() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    dispatch(fechAllProducts);
  }, []);

  const all_products_state = useSelector((state) => state.allProducts);

  const filterBySale = (e) =>
    dispatch(allProductsWithDiscountAction(e.target.checked));

  const filterByPrice = (e) => {
    e.preventDefault();
    const { min_price, max_price } = e.target.parentElement;

    const min_value = min_price.value || 0;
    const max_value = max_price.value || Infinity;
    dispatch(filterByPriceAction({ min_value, max_value }));
  };

  const sort = (e) => {
    dispatch(sortProductsAction(e.target.value));
  };

  const breadcrumbs = [
    { label: "Main page", path: "/" },
    { label: "All products", path: "/products", active: true },
  ];

  return (
    <div className={s.home_wrapper}>
      <div className={s.btn_container}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <h1 className={s.products_name}>All Products</h1>
      <Filter
        filterBySale={filterBySale}
        filterByPrice={filterByPrice}
        sort={sort}
        sale={false}
        handleChange={handleChange}
      />
      <ProductsContainer products={all_products_state} />
    </div>
  );
}
