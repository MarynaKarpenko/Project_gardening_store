import { useNavigate } from "react-router-dom";
import img_404 from "./Picture/404.png";
import s_404 from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className={s_404.page_not_found}>
      <img
        src={img_404}
        alt="Page Not Found"
        className={s_404.img_not_found}
      ></img>
      <h1 className={s_404.heading}>Page Not Found</h1>
      <p className={s_404.p_not_found}>
        We’re sorry, the page you requested could not be found.
      </p>
      <p className={s_404.p_not_found}>Please go back to the homepage.</p>
      <button onClick={() => navigate("/")} className={s_404.btn_not_found}>
        Go Home
      </button>
    </div>
  );
}
