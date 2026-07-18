import React from "react";
// import images
// styles
import styled from "styled-components";
import { About, Description, Image } from "../styles";
import homeIntro2 from "./../img/home_intro2.jpg";

const BenefitsSections = () => {
  return (
    <Benefits>
      <Description>
        <h2>High-Quality Learning System</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} alt="a girl in study" />
      </Image>
    </Benefits>
  );
};

// Styled
const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    color: #30bee1;
    padding-bottom: 5rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem 0rem 0rem 0rem;
    clip-path: polygon(0 9%, 100% 0%, 100% 90%, 0% 100%);
    border-left: 4px solid #30bee1;
  }
`;

export default BenefitsSections;
