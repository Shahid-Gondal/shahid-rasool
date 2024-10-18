import React from "react";

const educationContent = [
  {
    year: "2020-2024",
    degree: "BS Software Engineering",
    institute: "The Islamia University of bahawalpur",
    details: ``,
  },
  {
    year: "2016-2019",
    degree: "DAE Civil Engineering",
    institute: "Govt. Technical College Bahawalpur",
    details: ``,
  },
  {
    year: "2014-2016",
    degree: "Matric ",
    institute: "Punjab Group of Colleges Bahawalpur",
    details: ``,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
