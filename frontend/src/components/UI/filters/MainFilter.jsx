import React from "react";
import s from "./Filter.module.css";
import PriceFilter from "./PriceFilter";
import DiscountFilter from "./DiscountFilter";
import SortFilter from "./SortFilter";

export default function MainFilter({ filterBySale, sort, filterByPrice, sale, handleChange }) {
  return (
    <div className={s.filter_wrapper}>
      <PriceFilter filterByPrice={filterByPrice} />
      {!sale && <DiscountFilter handleChange={handleChange} filterBySale={filterBySale} />}
      <SortFilter sort={sort} />
    </div>
  );
}
