import React from "react";
import H2Styled from "../styles/H2Styled.jsx";
import H3Styled from "../styles/H3Styled.jsx";
import PStyled from "../styles/PStyled.jsx";

const Certificates = props => (
  <div className="Certificates">
    <H2Styled name="Certificates" />
    <div className="Certificates-container">
      {props.data.map((cer, index) => (
        <div className="Certificates-item" key={`Cer-${index}`}>
          <H3Styled>
            {cer.name} @ {cer.institution}
            <span>{cer.date}</span>
          </H3Styled>
          <PStyled name={cer.description} />
        </div>
      ))}
    </div>
  </div>
);

export default Certificates;
