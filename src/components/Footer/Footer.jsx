import React from "react";
import styled from "styled-components";
import Socials from "../Socials/Socials";
import resume from "../../resume";

const Footer = () => {
  return (
    <Container>
      <Socials />

      <Copyright>
        Made with love by the {resume.name} team ♥️ &copy; 2021
      </Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 250px;
  background-color: #0f0f0f;
  color: #303030;
`;

const Copyright = styled.p`
  margin-top: 12px;
`;
