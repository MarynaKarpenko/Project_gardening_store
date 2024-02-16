import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../asyncActions/products";
import {
  allProductsWithDiscountAction,
  filterByPriceAction,
  sortProductsAction,
} from "../../../store/actions/actions";
import Breadcrumbs from "../../UI/breadcrumbs/Breadcrumbs";
import ProductsContainer from "../../productsComponents/productsContainer/ProductsContainer";
import Filter from "../../UI/filters/MainFilter";
import s from "./AllProductsPage.module.css";

export default function AllProductsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts);
  }, []);

  const allProducts = useSelector((state) => state.allProducts);

  const filterBySale = (e) => dispatch(allProductsWithDiscountAction(e.target.checked));

  const filterByPrice = (e) => {
    e.preventDefault();
    const { min_price, max_price } = e.target.parentElement;
    const min_value = min_price.value || 1;
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
      />
      <ProductsContainer products={allProducts} />
    </div>
  );
};

