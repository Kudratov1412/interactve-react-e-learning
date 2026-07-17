import styled from "styled-components";

export const About = styled.div`
  // CSS codes;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rem 10rem;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`;

export const Image = styled.div`
  flex: 1;
  img {
    width: 80%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
