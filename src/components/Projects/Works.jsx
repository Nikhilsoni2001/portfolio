import React from "react";
import styled from "styled-components";
import Project from "./Project";
import resume from "../../resume";

const createProject = (project) => {
  return (
    <Project
      name={project.name}
      description={project.description}
      link={project.link}
    />
  );
};
const Works = () => {
  return (
    <Container id="projects">
      <Content>
        <Heading>CHECK OUT SOME OF MY WORKS.</Heading>
        <ProjectsContainer>
          {resume.projects.map(createProject)}
        </ProjectsContainer>
      </Content>
    </Container>
  );
};

export default Works;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 98px;
  padding-bottom: 98px;
  background-color: #ebeeee;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Heading = styled.h3`
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #95a3a3;
  margin-bottom: 25px;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
