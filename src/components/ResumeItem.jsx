import React from "react";
import styled from "styled-components";

const ResumeItem = ({ title, heading, course, duration }) => {
  return (
    <Container>
      <LeftContainer>
        <Title>{title}</Title>
      </LeftContainer>
      <RightContainer>
        <Heading>{heading}</Heading>
        <Description>
          <span>{course}</span> <span>•</span> {duration}
        </Description>
      </RightContainer>
    </Container>
  );
};

export default ResumeItem;

const Container = styled.div`
  height: 40vh;
  width: 70vw;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
`;

const LeftContainer = styled.div`
  flex: 0.3;
  display: flex;
  // justify  -content: flex-end;
  align-items: center;
`;
const RightContainer = styled.div`
  flex: 0.3;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.7;
`;
const Heading = styled.h1`
  margin-bottom: 4px;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-right: 120px;
  padding-top: 20px;
  padding-bottom: 8px;
  border-bottom: 3px solid #11abb0;
`;
const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 8px;
  color: #6e7881;
  span {
    padding-left: 5px;
    padding-right: 5px;
    font-style: italic;
  }
`;
