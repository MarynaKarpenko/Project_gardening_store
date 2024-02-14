import React from "react";
import s from "./Filter.module.css";

function DiscountFilter({ handleChange, filterBySale }) {
  return (
    <label className={s.checkbox_label}>
      <input
        type="checkbox"
        name="checkbox"
        onClick={handleChange}
        onChange={filterBySale}
        className={s.real_checkbox}
      />
      Discounted items
      <span className={s.fake_checkbox}></span>
    </label>
  );
}

export default DiscountFilter;
