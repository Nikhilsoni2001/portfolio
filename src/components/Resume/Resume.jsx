import React from "react";
import styled from "styled-components";
import ResumeItem from "./ResumeItem";
import resume from "../../resume";
import Skills from "./Skills";

const getResumeContent = (resumeItem) => {
  return (
    <ResumeItem
      title={resumeItem.name}
      heading={resumeItem.heading}
      course={resumeItem.course}
      duration={resumeItem.duration}
      link={resumeItem.link}
    />
  );
};

const Resume = () => {
  return (
    <Container id="resume">
      {resume.resume.map(getResumeContent)}
      <Skills />
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
