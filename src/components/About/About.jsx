import React from "react";
import styled from "styled-components";
import pic from "../../assets/images/pic.jfif";
import resume from "../../resume";
import GetAppIcon from "@material-ui/icons/GetApp";

const About = () => {
  return (
    <Container id="about">
      <LeftContainer>
        <Image src={pic}></Image>
      </LeftContainer>

      <RightContainer>
        <TopContainer>
          <AboutMe>
            <Heading>About Me</Heading>
            <Content>{resume.aboutMe}</Content>
          </AboutMe>
        </TopContainer>

        <BottomContainer>
          <ContactDetailsContainer>
            <Heading>Contact Details</Heading>
            <Content>Nikhil Soni</Content>
            <Content>Hajipur, Punjab</Content>
            <Content>India</Content>
            <Content>+91-8699333207</Content>
            <Content>nsoni19012001@gmail.com</Content>
          </ContactDetailsContainer>
          <ButtonContainer>
            <Button href={resume.resumeLink} target="_blank">
              <GetAppIcon className={"largeIcons"} />
              <ButtonText>Download Resume</ButtonText>
            </Button>
          </ButtonContainer>
        </BottomContainer>
      </RightContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 98px;
  padding-bottom: 98px;
  background-color: #2b2b2b;
  color: white;
`;

const LeftContainer = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
`;
const RightContainer = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
`;
const TopContainer = styled.div`
  width: 70%;
  flex: 0.35;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const BottomContainer = styled.div`
  flex: 0.65;
  display: flex;
`;
const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin: -90px 120px 50px 0;
`;

const AboutMe = styled.div`
  padding: 5px;
`;
const Heading = styled.h3`
  font-size: 1.5rem;
`;
const Content = styled.p`
  margin-top: 12px;
  font-size: 1.2rem;
  text-align: justify;
  color: #7a7a7a;
`;
const ContactDetailsContainer = styled.div`
  flex: 0.4;
  padding: 5px;
`;
const ButtonContainer = styled.div`
  flex: 0.6;
  display: flex;
  width: 20px;
`;

const Button = styled.a`
  background-color: #444;
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: 4px;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  .largeIcons {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    margin-top: 5px;
  }

  :hover {
    transition: all 0.8s;
    background-color: white;
    color: black;
  }
`;

const ButtonText = styled.span`
  font-size: 18px;
  font-weight: 700;
  mergin-left: 5px;
  text-align: center;
`;
