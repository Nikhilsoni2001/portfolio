/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import resume from "../resume";
import Socials from "./Socials";

const Home = () => {
  return (
    <Container>
      <Navbar />

      <Content>
        <Headline>I'm {resume.name}</Headline>
        <AboutMe>{resume.description}</AboutMe>

        <Socials />
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-image: url("https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
  flex-direction: column;
  opacity: 0.9;
`;

const Content = styled.div`
  height: 40vh;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Headline = styled.h1`
  font-size: 4.5rem;
`;

const AboutMe = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 16px;
`;
