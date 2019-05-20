import React from "react";
import H2Styled from "../styles/H2Styled.jsx";
import H3Styled from "../styles/H3Styled.jsx";
import PStyled from "../styles/PStyled.jsx";

const Education = props => (
  <div className="Education">
    <H2Styled name="Education" />
    <div className="Education-container">
      {props.data.map((edu, index) => (
        <div className="Education-item" key={`Edu-${index}`}>
          <H3Styled>
            {edu.degree} {edu.institution}
            <span>
              {edu.startDate} - {edu.endDate}
            </span>
          </H3Styled>
          <PStyled name={edu.description} />
        </div>
      ))}
    </div>
  </div>
);

export default Education;
