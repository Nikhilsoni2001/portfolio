/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import resume from "../../resume";
import Socials from "../Socials/Socials";
import Sidebar from "./Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container id="home">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <Content>
        <Headline>
          I'm <span>{resume.name}</span>
        </Headline>
        <AboutMe>{resume.description}</AboutMe>

        <Socials />
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  color: white;
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
  span {
    color: #f06000;
  }

  @media screen and (max-width: 1200px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.9rem;
  }
`;

const AboutMe = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 16px;

  @media screen and (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
