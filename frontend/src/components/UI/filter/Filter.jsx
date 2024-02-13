import React, { useState } from "react";
import s from "./Filter.module.css";
import green from "../../media/images/Check.svg";

export default function Filter({
  filterBySale,
  sort,
  filterByPrice,
  filterByNewProduct,
  sale,
  handleChange,
}) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={s.filter_wrapper}>
        <form className={s.filter_form}>
          <p>Price</p>
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
        {sale ? (
          ""
        ) : (
            <label className={s.checkbox_label}>
              Discounted items
              <span
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
                )}
                <input
                  type="checkbox"
                  name="checkbox"
                  onClick={handleChange}
                  onChange={filterBySale}
                  className={s.hidden_checkbox}
                />
              </span>
            </label>
        )}
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
          {/* <option value="4">newest</option> */}
        </select>
      </div>
    </div>
  );
}
