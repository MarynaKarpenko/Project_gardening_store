import iconInst from "./Icons/IconsInst.svg";
import iconWatsApp from "./Icons/IconsWatsApp.svg";
import s from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={s.wrapper_contacts}>
      <div className={s.contact_info}>
        <div className={s.telephone_div}>
          <p>Phone</p>
          <h4>
            <a href="tel:+499999999999" className={s.contact}>
              +49 999 999 99 99
            </a>
          </h4>
        </div>
        <div className={s.socials_div}>
          <p>Socials</p>
          <h4>
            <a
              href="https://www.instagram.com/startainstitute/"
              className={s.instagram}
            >
              <img src={iconInst} alt=""></img>
            </a>
            <a>
              <img src={iconWatsApp} alt="" className={s.contact}></img>
            </a>
          </h4>
        </div>
      </div>
      <div className={s.address_info}>
        <div className={s.address_div}>
          <p>Address</p>
          <h4>
            <a
              href="geo:0,0?q=Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland"
              className={s.contact}
            >
              Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
            </a>
          </h4>
        </div>
        <div className={s.hours_div}>
          <p>Working Hours</p>
          <h4>
            <a className={s.working_hours}>24 hours a day</a>
          </h4>
        </div>
      </div>
    </div>
  );
}
