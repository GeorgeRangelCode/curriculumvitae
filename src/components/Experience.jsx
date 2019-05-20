import React from "react";
import H2Styled from "../styles/H2Styled.jsx";
import H3Styled from "../styles/H3Styled.jsx";
import PStyled from "../styles/PStyled.jsx";

const Experience = props => (
  <div className="Experience">
    <H2Styled name="Experience" />
    <div className="Experience-container">
      {props.data.map((exp, index) => (
        <div className="Experience-item" key={`Exp-${index}`}>
          <H3Styled>
            {exp.jobTitle} @ {exp.company}
            <span>
              {exp.startDate} - {exp.endDate}
            </span>
          </H3Styled>
          <PStyled name={exp.jobDescription} />
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
