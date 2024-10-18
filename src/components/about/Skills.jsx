import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "HTML" },
  { skillClass: "p95", skillPercent: "95", skillName: "CSS" },
  { skillClass: "p80", skillPercent: "80", skillName: "JavaScript" },
  { skillClass: "p95", skillPercent: "95", skillName: "Dart" },
  { skillClass: "p99", skillPercent: "99", skillName: "PHP" },
  { skillClass: "p99", skillPercent: "99", skillName: "Wordpress" },
  { skillClass: "p97", skillPercent: "97", skillName: "Flutter" },
  { skillClass: "p85", skillPercent: "85", skillName: "Firebase" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
