import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./ToolEquimentPage.module.css";
import { fechNameOfCategory, fechProductsByCategory } from "../../../Async/request";
import { filterByPriceAction, productsWithDiscountAction, sortProductsAction } from "../../../store/reducers/productsByCategoryReducer";
import Filter from "../../Filter"
import ProductsContainer from "../../ProductsContainer";

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
  return (
    <div>
      <h2 className={s.title}>{title}</h2>
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
