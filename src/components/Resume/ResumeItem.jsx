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
  display: flex;
  padding-top: 98px;
  padding-bottom: 98px;
  width: 70vw;
  border-bottom: 1px solid #e8e8e8;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const LeftContainer = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex: 1;
  }
`;
const RightContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.7;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-right: 120px;
  padding-top: 20px;
  padding-bottom: 8px;
  border-bottom: 3px solid #11abb0;
  :hover {
    transition: all 0.2s;
    padding-bottom: 12px;
  }

  @media screen and (max-width: 600px) {
    margin: 0 0 1.2rem 0;
  }
`;

const Heading = styled.h1`
  margin: 1rem 0;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    text-align: center;
  }
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

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    text-align: center;
  }
`;
