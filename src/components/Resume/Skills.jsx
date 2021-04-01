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
`;

const LeftContainer = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-start;
`;
const RightContainer = styled.div`
  flex: 0.3;
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
`;
