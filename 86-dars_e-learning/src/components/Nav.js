import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          e-Learning
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #383e47;
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: "Silkscreen", sans-serif;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
