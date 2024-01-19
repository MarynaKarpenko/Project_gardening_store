import { useNavigate } from "react-router-dom";
import img from "./Picture/404.png";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={s.page_not_found}>
      <img src={img} alt="" className={s.img_not_found}></img>
      <h1 className={s.h1_not_found}>Page Not Found</h1>
      <p className={s.p_not_found}>
        We’re sorry, the page you requested could not be found.
      </p>
      <p className={s.p_not_found}>Please go back to the homepage.</p>
      <button onClick={() => navigate("/")} className={s.btn_not_found}>
        Go Home
      </button>
    </div>
  );
}
