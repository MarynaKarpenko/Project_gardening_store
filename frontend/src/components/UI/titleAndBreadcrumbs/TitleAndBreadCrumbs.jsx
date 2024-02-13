import React from "react";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import s from "./TitleAndBreadCrumbs.module.css";

export default function TitleAndBreadCrumbs({
  title,
  breadcrumbs,
  classTitleContainer,
}) {
  return (
    <div className={`${classTitleContainer} ${s.title_container}`}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.line}></div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
}
