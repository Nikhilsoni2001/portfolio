import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import resume from "../resume";

const Skills = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>Skills</Title>
      </LeftContainer>
      <RightContainer>
        <ProgressBar
          name={resume.skills.react.name}
          percentage={resume.skills.react.percentage}
        />
        <ProgressBar
          name={resume.skills.nodejs.name}
          percentage={resume.skills.nodejs.percentage}
        />
        <ProgressBar
          name={resume.skills.css.name}
          percentage={resume.skills.css.percentage}
        />
        <ProgressBar
          name={resume.skills.javascript.name}
          percentage={resume.skills.javascript.percentage}
        />
        <ProgressBar
          name={resume.skills.mongoDB.name}
          percentage={resume.skills.mongoDB.percentage}
        />
        <ProgressBar
          name={resume.skills.express.name}
          percentage={resume.skills.express.percentage}
        />
        <ProgressBar
          name={resume.skills.kotlin.name}
          percentage={resume.skills.kotlin.percentage}
        />
        <ProgressBar
          name={resume.skills.java.name}
          percentage={resume.skills.java.percentage}
        />
        <ProgressBar
          name={resume.skills.git.name}
          percentage={resume.skills.git.percentage}
        />
      </RightContainer>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 70vw;
  display: flex;
  padding-top: 96px;
  padding-bottom: 96px;
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
`;
