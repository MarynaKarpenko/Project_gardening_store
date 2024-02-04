import React, { useState } from "react";
import s from "./Filter.module.css";
import green from "../Media/Check.svg";

export default function Filter({
  filterBySale,
  sort,
  filterByPrice,
  sale,
  handleChange,
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={s.filter_wrapper}>
      <div className={s.wrapper}>
        <div className={s.filter_price}>
          <p>Price</p>
          <form className={s.filter_form}>
            <input
              type="number"
              placeholder="from"
              name="min_price"
              onChange={filterByPrice}
            />
            <input
              type="number"
              placeholder="to"
              name="max_price"
              onChange={filterByPrice}
            />
          </form>
        </div>

        {sale ? (
          ""
        ) : (
          <div className={s.filter_sale}>
            <p>Discounted items</p>
            <label className={s.checkbox_label}>
              {/* <span
                className={
                  isChecked
                    ? `${s.checked} ${s.checkbox_container}`
                    : s.checkbox_container
                }
              >
                {isChecked && (
                  <img
                    src={green}
                    alt="Checkmark"
                    className={s.checkbox_image}
                  />
                )} */}
                <input
                  type="checkbox"
                  name="checkbox"
                  onClick={handleChange}
                  onChange={filterBySale}
                  className={s.hidden_checkbox}
                />
              {/* </span> */}
            </label>
          </div>
        )}
      </div>

      <div className={s.sort}>
        <p>Sorted</p>
        <select
          defaultValue={{ value: "default" }}
          onChange={sort}
          className={s.filter_select}
        >
          <option value="0">by default</option>
          <option value="1">price: low-high</option>
          <option value="2">price: high-low</option>
          <option value="3">by name</option>
          <option value="4">newest</option>
        </select>
      </div>
    </div>
  );
}