import React from "react";
import iconInst from "../../icons/IconsInst.svg";
import iconWatsApp from "../../icons/IconsWatsApp.svg";
import s from "./Contact.module.css";

const commonStyles = {
  contact: s.contact,
};

const socials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/startainstitute/",
    icon: iconInst,
  },
  { name: "WhatsApp", link: "https://web.whatsapp.com/", icon: iconWatsApp },
];

const ContactInfoItem = ({ title, content }) => (
  <div>
    <p>{title}</p>
    {content}
  </div>
);

export default function Contact() {
  return (
    <div className={s.contact_info}>
      <ContactInfoItem
        title="Phone"
        content={<a href="tel:+499999999999">+49 999 999 99 99</a>}
      />
      <ContactInfoItem
        title="Socials"
        content={socials.map((social) => (
          <a key={social.name} href={social.link}>
            <img src={social.icon} alt={social.name} className={s.instagram} />
          </a>
        ))}
      />
      <ContactInfoItem
        title="Address"
        content={
          <a href="geo:0,0?q=Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland">
            Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
          </a>
        }
      />
      <ContactInfoItem
        title="Working Hours"
        content={<h4 className={s.working_hours}>24 hours a day</h4>}
      />
    </div>
  );
}
