import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as LinkS } from "react-scroll";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Home
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              About
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="resume"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Resume
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Projects
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>

        <Hamburger onClick={toggle}>
          <MenuIcon fontSize="large" />
        </Hamburger>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  // position: sticky;
  top: 0;
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const Hamburger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    transform: translate(-100%, 60%);
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  height: 80px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 60px;
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;

  &:hover {
    transition: color 0.5s;
    color: #f06000;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;
