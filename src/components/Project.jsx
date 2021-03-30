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
  padding: 16px 8px;
  background-color: #f4f3f3;
  display: flex;
  margin: 12px 8px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  :hover {
    transition: box-shadow 1s;
    // padding: 9px;
    box-shadow: 6px 10px 9px -2px rgba(0, 0, 0, 0.76);
  }
`;

const Heading = styled.h3`
  font-size: 2rem;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #212121;
`;
const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 8px;
  margin-bottom: 12px;
  color: #757575;
  text-align: justify;
  padding: 8px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #424242;
`;
