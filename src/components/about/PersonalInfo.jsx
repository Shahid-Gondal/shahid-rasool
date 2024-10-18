import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Shahid", hasColor: "" },
  { meta: "last name", metaInfo: "Rasool", hasColor: "" },
  { meta: "Age", metaInfo: "23 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Pakistani", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Bahawalpur, PB,PK", hasColor: "" },
  { meta: "phone", metaInfo: "+92 307 6893835", hasColor: "" },
  { meta: "Email", metaInfo: "sgondal3770@gmail.com", hasColor: "" },
  { meta: "Facebook", metaInfo: "shahid.gondal.902819", hasColor: "" },
  { meta: "langages", metaInfo: "English & Urdu", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
