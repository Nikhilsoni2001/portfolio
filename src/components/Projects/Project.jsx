import React from "react";
import styled from "styled-components";
import LinkIcon from "@material-ui/icons/Link";

const Project = ({ name, description, link }) => {
  return (
    <Container>
      <Heading>{name}</Heading>
      <Description>{description}</Description>
      <Link target="_blank" href={link}>
        <LinkIcon />
      </Link>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  width: 450px;
  height: 275px;
  padding: 16px 18px;
  background-color: #f4f3f3;
  display: flex;
  margin: 12px 8px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    transition: all 1s;
    box-shadow: 6px 10px 9px -2px rgba(0, 0, 0, 0.76);
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 18px 24px;
    justify-content: center;
  }
`;

const Heading = styled.h3`
  font-size: 1.8rem;
  margin-top: 8px;
  color: #212121;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #757575;
  text-align: justify;
  padding: 8px;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #424242;
`;
