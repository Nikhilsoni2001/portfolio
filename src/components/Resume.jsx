import React from "react";
import styled from "styled-components";
import ResumeItem from "./ResumeItem";
import resume from "../resume";
import Skills from "./Skills";

const Resume = () => {
  return (
    <Container>
      <ResumeItem
        title="Education"
        heading={resume.education.heading}
        course={resume.education.course}
        duration={resume.education.duration}
      />
      <ResumeItem
        title="Work"
        heading={resume.work.heading}
        course={resume.work.position}
        duration={resume.work.duration}
      />

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
