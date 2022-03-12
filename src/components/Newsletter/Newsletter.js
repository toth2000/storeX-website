import { Send } from "@mui/icons-material";
import React from "react";
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./style";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates regarding your favorite products.
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
