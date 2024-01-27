import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fechSalesProducts } from "../../../Async/request";
import {
  filterByPriceAction,
  sortProductsAction,
} from "../../../store/reducers/productsWithDiscountReducer";
import BtnMainPage from "../../BtnCard/BtnMainPage";
import BtnAllSales from "../../BtnCard/BtnAllSales";
import Filter from "../../Filter"
import ProductsContainer from "../../ProductsContainer"
import s from "./DiscountsPage.module.css";


export default function DiscountsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fechSalesProducts);
  }, []);
  const products = useSelector((state) => state.productsWithdiscount);

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
  const location = useLocation();

  return (
    <div className={s.discounted_wrapper}>
      <div className={s.btn_container}>
        <BtnMainPage />
        <div className={s.line}></div>
        <BtnAllSales active={location.pathname === "/sales"} />
      </div>
      <h1>Discounted items</h1>
      <Filter sale={true} filterByPrice={filterByPrice} sort={sort} />
      <ProductsContainer products={products} />
    </div>
  );
}
