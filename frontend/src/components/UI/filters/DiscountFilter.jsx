import React from "react";
import s from "./Filter.module.css";

export default function DiscountFilter({ filterBySale }) {
  return (
    <label className={s.checkbox_label}>
      <input
        type="checkbox"
        name="checkbox"
        onChange={filterBySale}
        className={s.real_checkbox}
      />
      Discounted items
      <span className={s.fake_checkbox}></span>
    </label>
  );
}

