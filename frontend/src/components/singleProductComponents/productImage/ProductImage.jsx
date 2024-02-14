import React from "react";
import s from "./ProductImage.module.css";
import { BASE_URL } from "../../../config";

export default function ProductImage({ el }) {
  return (
    <div className={s.image}>
      <img src={`${BASE_URL}/${el.image}`} alt={el.title} />
    </div>
  );
}
