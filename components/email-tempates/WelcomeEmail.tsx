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

interface EmailTemplateProps {
  name: string;
  email: string;
}

export const WelcomeEmail: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
}) => (
  <Html>
    <Head />
    <Preview>From CodeCamber</Preview>

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
          gap: "5px",
        }}
      >
        <Img
          src="https://res.cloudinary.com/dkr6e4kg4/image/upload/v1718997069/codecamber-logo_hpnexs.png"
          style={{
            height: "105px",
            width: "214px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </Container>
      <Container
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          width: "80%",
          gap: "10px",
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
          Welcome to CodeCamber
        </Heading>
        <Text>{email === name ? "" : email}</Text>
        <strong>Dear {name},</strong>
        <Text>
          Thank you!!! for reaching out to us! Your message has been
          successfully received, and we're thrilled to have the opportunity to
          assist you. Our team is dedicated to providing excellent service and
          addressing your needs promptly.
        </Text>
        <br />

        <Text>
          Once again, thank you for choosing CodeCamber. We look forward to
          serving you and ensuring your experience with us is nothing short of
          exceptional.
        </Text>
      </Container>
    </Body>
  </Html>
);
