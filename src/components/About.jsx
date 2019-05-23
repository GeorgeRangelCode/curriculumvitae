import React from "react";
import Social from "./Social.jsx";
import styled from "styled-components";

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 2px solid #74153a;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weigth: 400;
  letter-spacing: 1.2px;
  margin: 0.5em 0 0 0;
  color: #202020;
`;

const AboutProfession = styled.p`
  margin: 0.2em 1em 0;
  letter-spacing: 1.6px;
  font-weigth: 300;
  color: #74153a;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weigth: 300;
`;

const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weigth: 400;
`;

const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg src={avatar} alt={name} />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>{name}</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>{profession}</AboutProfession>
      </div>
      <div className="About-desc">
        <AboutBio>{bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social social={social} />
      </div>
    </div>
  </AboutStyle>
);

export default About;
