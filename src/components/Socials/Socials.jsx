import React from "react";
import styled from "styled-components";
import resume from "../../resume";

const getSocials = (social) => {
  return (
    <a target={"_blank"} href={social.href} rel="noreferrer">
      {social.icon}
    </a>
  );
};

const Socials = () => {
  return <Container>{resume.socials.map(getSocials)}</Container>;
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
    color: #f06000;
  }
`;
