import * as React from "react";

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export const ContactEmailTemplate: React.FC<
  Readonly<ContactEmailTemplateProps>
> = ({ email, name, message }) => (
  <Html>
    <Head />
    <Preview>Contact from Agency Landing Page</Preview>

    <Body
      style={{
        backgroundColor: "black",
        color: "white",
        margin: "auto",
        padding: "30px 20px",
      }}
    >
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "90%",
          textAlign: "center",
          margin: "auto",
          gap: "5px",
        }}
      >
        <Img
          src="https://res.cloudinary.com/dkr6e4kg4/image/upload/v1718997069/codecamber-logo_hpnexs.png"
          style={{ height: "105px", width: "214px", textAlign: "center" }}
        />
      </Container>

      <Container
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          width: "80%",
          gap: "5px",
        }}
      >
        <Heading
          style={{
            fontWeight: "bold",
            paddingTop: "25px",
            color: "#e39b14",
            textAlign: "center",
          }}
        >
          New Contact
        </Heading>
        <Container>
          <Text>
            <strong>Name: </strong> {name}
          </Text>
          <Text>
            <strong>Email Id: </strong> <span>{email}</span>
          </Text>
          <Text>
            <strong>Message: </strong>
          </Text>
          <Text>{message}</Text>
        </Container>
      </Container>
    </Body>
  </Html>
);
