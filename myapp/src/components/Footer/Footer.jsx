import Contact from "./contact/Contact";
import s from "./Footer.module.css";
import Map from "./map/Map";

export default function Footer() {
  return (
    <div className={s.footer_wrapper}>
      <h1 className={s.contact_h1}>Contact</h1>
      <Contact />
      <Map />
    </div>
  )
}
