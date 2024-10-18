import React from "react";

const experienceContent = [
  {
    year: "   01/2021 - Present",
    position: "FULL STACK MOBILE APP DEVELOPER",
    compnayName: "StemEye Tech",
    details: `Led successful Flutter app development, exceeding client expectations with innovative features like real-time chat and push notifications. Garnered client praise for top-tier code quality and post-launch support. Actively engaged in the Flutter community through blogs and open-source contributions, advocating for industry best practices, enhancing team efficiency, and elevating code quality.`,
  },
  {
    year: "09/2024 - Present",
    position: "Flutter Developer",
    compnayName: "Ecodecamp (Pvt) Ltd",
    details: `Developed FidoMingle, a Flutter-based app fostering pet owner connections, yielding a vibrant community and positive feedback. Led SMSReceipt app development, digitizing receipts for eco-friendliness. Contributed to a book app, enhancing browsing and sales. Enhanced iPyramids with Flutter, boosting engagement. Efficiently collaborated remotely, utilizing communication tools and version control for timely project completion.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
