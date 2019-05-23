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
  return data.length === 0 ? (
    <h1>Cargando...</h1>
  ) : (
    <Main>
      <Sidebar>
        <About
          avatar={data.avatar}
          name={data.name}
          profession={data.profession}
          bio={data.bio}
          address={data.address}
          social={data.social}
        />
      </Sidebar>  
      <Info>
        <Education data={data.education} />
        <Experience data={data.experience} />
        <Certificates data={data.certificate} />
        <Skills data={data.skills} />
      </Info>
    </Main>
  );
};

export default App;
