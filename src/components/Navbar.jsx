import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <NavItem href={"#home"}>Home</NavItem>
      <NavItem href={"#about"}>About</NavItem>
      <NavItem href={"#resume"}>Resume</NavItem>
      <NavItem href={"#projects"}>Projects</NavItem>
      {/* <NavItem href={"#testimonals"}>Testimonals</NavItem> */}
      <NavItem href={"#contact"}>Contact</NavItem>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const NavItem = styled.a`
  margin: 12px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 3px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  :hover {
    transition: color 0.5s;
    color: #2196f3;
  }
`;
