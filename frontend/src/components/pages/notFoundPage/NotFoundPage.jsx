import img_404 from "../../media/images/404.svg";
import s from "./NotFoundPage.module.css";
import BtnCard, { ButtonTypes } from "../../UI/btnCard/BtnCard";

export default function NotFoundPage() {
  return (
    <div className={s.page_not_found}>
      <img src={img_404} alt="Page Not Found" className={s.img_not_found}></img>
      <h1 className={s.heading}>Page Not Found</h1>
      <p className={s.p_not_found}>
        We’re sorry, the page you requested could not be found.
      </p>
      <p className={s.p_not_found_2}>Please go back to the homepage.</p>
      <BtnCard type={ButtonTypes.GO_HOME} />
    </div>
  );
}
