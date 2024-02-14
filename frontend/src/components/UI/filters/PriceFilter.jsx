import React from "react";
import s from "./Filter.module.css";

function PriceFilter({ filterByPrice }) {
  return (
    <form className={s.filter_form}>
      <p>Price</p>
      <input type="number" placeholder="from" name="min_price" onChange={filterByPrice} />
      <input type="number" placeholder="to" name="max_price" onChange={filterByPrice} />
    </form>
  );
}

export default PriceFilter;
