import React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  letter-spacing: 0.8px;
  margin: 1em 0 0 0;
  color: #74153a;
`;

const H2Styled = ({ name }) => <StyledH2>{name}</StyledH2>;

export default H2Styled;
