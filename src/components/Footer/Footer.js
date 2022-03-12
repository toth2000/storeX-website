import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import {
  Center,
  Container,
  Left,
  Right,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
} from "./style";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>StoreX</Logo>
        <Description>Test Description, Random Text</Description>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms And Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          {" "}
          <Room /> XYZ Nagar, Delhi, India
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone /> +91-8888888888
        </ContactItem>
        <ContactItem>
          {" "}
          <Mail /> contact@storeX.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
