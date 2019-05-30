import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "../components/Main.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Info from "../components/Info.jsx";
import About from "../components/About.jsx";
import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";
import Certificates from "../components/Certificates.jsx";
import Skills from "../components/Skills.jsx";
import useGetData from "../hooks/useGetData";
import Loader from "../components/Loader.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
`;

const App = () => {
  const data = useGetData();
  return data.length === 0 ? (
    <Loader />
  ) : (
    <Main>
      <GlobalStyle />
      <Sidebar>
        <About
          avatar={data[0].avatar}
          name={data[0].name}
          profession={data[0].profession}
          bio={data[0].bio}
          address={data[0].address}
          social={data[0].social}
        />
      </Sidebar>
      <Info>
        <Education data={data[0].education} />
        <Experience data={data[0].experience} />
        <Certificates data={data[0].certificate} />
        <Skills data={data[0].skills} />
      </Info>
    </Main>
  );
};

export default App;
