import React from "react";
import styled from "styled-components";
import resume from "../resume";

const Socials = () => {
  return (
    <Container>
      <a target={"_blank"} href={resume.socials.linkedIn.href} rel="noreferrer">
        {resume.socials.linkedIn.icon}
      </a>

      <a target={"_blank"} href={resume.socials.twitter.href} rel="noreferrer">
        {resume.socials.twitter.icon}
      </a>
      <a
        target={"_blank"}
        href={resume.socials.instagram.href}
        rel="noreferrer"
      >
        {resume.socials.instagram.icon}
      </a>
      <a target={"_blank"} href={resume.socials.github.href} rel="noreferrer">
        {resume.socials.github.icon}
      </a>
    </Container>
  );
};

export default Socials;

const Container = styled.div`
  margin-top: 16px;
  .largeIcons {
    width: 45px;
    height: 45px;
    padding: 6px;
    color: white;
  }

  .largeIcons:hover {
    transition: color 0.5s;
    color: #2196f3;
  }
`;
