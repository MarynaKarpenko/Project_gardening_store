import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductsContainer from "../../ProductsContainer";
import Filter from "../../Filter/index";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import BtnCategories from "../../BtnCard/BtnCategories";
import BtnAllProducts from "../../BtnCard/BtnAllProducts";
import s from "./AllProductsPage.module.css";
import {fechAllProducts} from "../../../Async/request"
import { allProductsWithDiscountAction, filterByPriceAction, sortProductsAction } from "../../../store/reducers/allProductsReducer";

export default function AllProductsPage() {

  const location = useLocation();
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
