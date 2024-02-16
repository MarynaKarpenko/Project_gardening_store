import React from "react";
import s from "./Filter.module.css";

export default function SortFilter({ sort }) {
  return (
    <div className={s.sort}>
      <p>Sorted</p>
      <select
        defaultValue={{ value: "default" }}
        onChange={sort}
        className={s.select}
      >
        <option value="0">by default</option>
        <option value="1">price: low-high</option>
        <option value="2">price: high-low</option>
        <option value="3">by name A-Z</option>
        <option value="4">by name Z-A</option>
        <option value="5">newest</option>
      </select>
    </div>
  );
}
