import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/shahid.gondal.902819",
  },
  { iconName: "fa fa-whatsapp", link: "https://wa.me/+923076893835" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/shahid-rasool-605975213/",
  },
  { iconName: "fa fa-github", link: "https://github.com/Shahid-Gondal" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
