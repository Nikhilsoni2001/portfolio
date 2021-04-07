import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import resume from "../../resume";

const createSkills = (skill) => {
  console.log(skill);
  return <ProgressBar name={skill.name} percentage={skill.percentage} />;
};

const Skills = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>Skills</Title>
      </LeftContainer>
      <RightContainer>{resume.skills.map(createSkills)}</RightContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 70vw;
  display: flex;
  padding-top: 98px;
  padding-bottom: 98px;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 95px;
  }

  @media screen and (max-width: 600px) {
    padding: 95px 20px;
  }
`;

const LeftContainer = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex: 1;
    justify-content: center;
  }
`;
const RightContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.7;

  @media screen and (max-width: 768px) {
    flex: 1;
  }
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

  @media screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 1.2rem 0;
  }
`;
