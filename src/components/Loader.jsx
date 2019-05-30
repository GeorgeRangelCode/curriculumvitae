import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => (
  <LoaderContainer>
    <svg
      height="200"
      width="200"
      fill="#74153a"
      viewBox="0 0 55 80"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1 0 0 -1 0 80)">
        <rect width="10" height="51.4089" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="4.3s"
            values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="15" width="10" height="13.5751" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="2s"
            values="80;55;33;5;75;23;73;33;12;14;60;80"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="30" width="10" height="33.0164" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="1.4s"
            values="50;34;78;23;56;23;34;76;80;54;21;50"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="45" width="10" height="25.3372" rx="3">
          <animate
            attributeName="height"
            begin="0s"
            dur="2s"
            values="30;45;13;80;56;72;45;76;34;23;67;30"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  </LoaderContainer>
);

export default Loader;
