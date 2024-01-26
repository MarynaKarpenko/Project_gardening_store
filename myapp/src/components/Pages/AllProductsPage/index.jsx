import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsContainer from "../../ProductsContainer";
import Filter from "../../Filter/index";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import BtnCategories from "../../BtnCard/BtnCategories";
import BtnAllProducts from "../../BtnCard/BtnAllProducts";
import s from "./AllProductsPage.module.css";
import {fetchAllProducts} from "../../../Async/request"

export default function AllProductsPage() {

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllProducts(dispatch);
  }, [dispatch]);

  const all_products = useSelector((state) => state.allProducts);

  return (
    <div className={s.home_wrapper}>
      <div className={s.btn_container}>
        <BtnMainPage />
        <div className={s.line}></div>
        <BtnCategories />
        <div className={s.line}></div>
        <BtnAllProducts active={location.pathname === "/products"} />
      </div>
      <h1>All Products</h1>
      <Filter />
      <ProductsContainer products={all_products} />
    </div>
  );
}
