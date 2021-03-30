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
`;
const Title = styled.h2`
  color: #313131;
  text-transform: uppercase;
  letter-spacing: 8px;
  margin: 0px 0 8px 0;
`;
