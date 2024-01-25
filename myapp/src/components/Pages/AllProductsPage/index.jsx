import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/actions/actions";
import ProductsContainer from "../../ProductsContainer";
import Filter from "../../Filter/index";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import BtnCategories from "../../BtnCard/BtnCategories";
import BtnAllProducts from "../../BtnCard/BtnAllProducts";
import s from "./AllProductsPage.module.css";

export default function AllProductsPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const all_products_state = useSelector((state) => state.allProducts);

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
      <ProductsContainer products={all_products_state} />
    </div>
  );
}
