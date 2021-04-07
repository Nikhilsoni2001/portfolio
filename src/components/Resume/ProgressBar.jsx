import React from "react";
import styled from "styled-components";
import { Line } from "rc-progress";

const ProgressBar = ({ name, percentage }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Line percent={percentage} strokeWidth="2" strokeColor="#313131" />
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;
const Title = styled.h2`
  color: #313131;
  text-transform: uppercase;
  letter-spacing: 7px;
  margin: 0px 0 18px 0;

  @media screen and (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;
