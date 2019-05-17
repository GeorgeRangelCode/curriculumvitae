import React from "react";
import Main from "../components/Main.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Info from "../components/Info.jsx";
import About from "../components/About.jsx";
import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";
import Certificates from "../components/Certificates.jsx";
import Skills from "../components/Skills.jsx";
import useGetData from "../hooks/useGetData";

const App = () => {
  const data = useGetData();
  console.log(data);
  return (
    <Main>
      <Sidebar>
        <About />
      </Sidebar>
      <Info>
        <Education />
        <Experience />
        <Certificates />
        <Skills />
      </Info>
    </Main>
  );
};

export default App;
