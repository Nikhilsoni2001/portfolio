import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import SmartphoneIcon from "@material-ui/icons/Smartphone";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => alert("Message has been submitted! 👍"))
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container id="contact">
      <Title>
        Contact me <SmartphoneIcon fontSize="large" />
      </Title>
      <Form className="form">
        <Row>
          <Label>Name:</Label>
          <Input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Row>

        <Row>
          <Label>Email:</Label>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Row>

        <Row>
          <Label>Message:</Label>
          <TextArea
            placeholder="Message"
            rows="4"
            cols="25"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Row>

        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  padding-top: 98px;
  padding-bottom: 98px;
  background-color: #191919;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  padding: 8px;
  margin-top: 25px;
  align-items: center;
`;
const Form = styled.form`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 4px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1200px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Label = styled.h2`
  font-size: 1.2rem;
  margin-right: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;
const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #edeeee;
  outline: none;
  padding: 14px 6px;
`;
const Input = styled.input`
  height: 30px;
  width: 320px;
  border-radius: 5px;
  border: 1px solid #edeeee;
  outline: none;
  padding: 18px 6px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;
const SubmitButton = styled.button`
  margin-top: 32px;
  width: 120px;
  height: 50px;
  font-size: 1.2rem;
  border-radius: 8px;
  outline: none;
  border: none;
  color: white;
  background-color: #0d0d0d;

  :hover {
    transition: all 0.6s;
    background-color: white;
    color: black;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 95px;
    height: 40px;
  }
`;
