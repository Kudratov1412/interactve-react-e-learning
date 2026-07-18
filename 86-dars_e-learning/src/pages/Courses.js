import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// Images
import pic1 from "./../img/1-pic.jpg";
import pic2 from "./../img/2-pic.jpg";
import pic3 from "./../img/3-pic.jpg";

const Courses = () => {
  return (
    <StyledCourses>
      <Course>
        <h2>Interactiv React va Redux</h2>
        <div className="line"></div>
        <Link>
          <img src={pic1} alt="react-redux" />
        </Link>
      </Course>
      <Course>
        <h2>Tez kunda 😮</h2>
        <div className="line"></div>
        <Link>
          <img src={pic2} alt="tez kunda" />
        </Link>
      </Course>
      <Course>
        <h2>Interactiv JavaScript</h2>
        <div className="line"></div>
        <Link>
          <img src={pic3} alt="javascript" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled.div`
  min-height: 10vh;
  padding: 5rem 10rem;
  img {
    width: 800px;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Course = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
`;

export default Courses;
