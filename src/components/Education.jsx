import React from "react";

const Education = props => (
  <div className="Education">
    <div className="Education-container">
      {props.data.map((edu, index) => (
        <div className="Education-item" key={`Edu-${index}`}>
          <h3>
            {edu.degree} {edu.institution}
            <span>
              {edu.startDate} - {edu.endDate}
            </span>
          </h3>
          <p>Aprendi Mucho</p>
        </div>
      ))}
    </div>
  </div>
);

export default Education;
