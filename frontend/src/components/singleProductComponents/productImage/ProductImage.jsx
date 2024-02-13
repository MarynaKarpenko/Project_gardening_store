import React from "react";
import s from "./ProductImage.module.css";
import { BASE_URL } from "../../../config";

export default function ProductImage({ title, image }) {
  return (
    <div className={s.image}>
      <img src={`${BASE_URL}/${image}`} alt={title} />
    </div>
  );
}
