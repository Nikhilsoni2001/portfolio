import React from "react";
import styled from "styled-components";
import Project from "./Project";
import resume from "../resume";

const Works = () => {
  return (
    <Container>
      <Content>
        <Heading>CHECK OUT SOME OF MY WORKS.</Heading>
        <ProjectsContainer>
          <Project
            name={resume.projects.amazonClone.name}
            description={resume.projects.amazonClone.description}
            link={resume.projects.amazonClone.link}
          />
          <Project
            name={resume.projects.covid19tracker.name}
            description={resume.projects.covid19tracker.description}
            link={resume.projects.covid19tracker.link}
          />
          <Project
            name={resume.projects.soniMeals.name}
            description={resume.projects.soniMeals.description}
            link={resume.projects.soniMeals.link}
          />
        </ProjectsContainer>
      </Content>
    </Container>
  );
};

export default Works;

const Container = styled.div`
  background-color: #ebeeee;
  padding-top: 96px;
  padding-bottom: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  width: 70vw;
  //   background-color: red;
`;

const Heading = styled.h3`
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #95a3a3;
  margin-bottom: 25px;
`;

const ProjectsContainer = styled.div`
  display: flex;
`;
