import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fechAllProducts } from "../../../Async/request";
import {
  allProductsWithDiscountAction,
  filterByPriceAction,
  sortProductsAction,
} from "../../../store/reducers/productsReducer";
import Breadcrumbs from "../../UI/breadcrumbs/Breadcrumbs";
import ProductsContainer from "../../productsComponents/productsContainer/ProductsContainer";
import Filter from "../../UI/filters/MainFilter";
import s from "./AllProductsPage.module.css";

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    dispatch(fechAllProducts);
  }, []);

  const { allProducts: all_products_state } = useSelector((state) => state);

  const handleChange = () => setChecked((prevChecked) => !prevChecked);

  const filterBySale = (e) => dispatch(allProductsWithDiscountAction(e.target.checked));

  const filterByPrice = (e) => {
    e.preventDefault();
    const { min_price, max_price } = e.target.parentElement;
    const min_value = min_price.value || 0;
    const max_value = max_price.value || Infinity;
    dispatch(filterByPriceAction({ min_value, max_value }));
  };

  const sort = (e) => dispatch(sortProductsAction(e.target.value));

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
};

export default AllProductsPage;
