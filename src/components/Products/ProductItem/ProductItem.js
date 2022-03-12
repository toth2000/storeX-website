import React from "react";
import {
  FavoriteBorderRounded,
  InfoOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import {
  Container,
  DetailContainer,
  Icon,
  IconContainer,
  Image,
  InfoContainer,
  Price,
  Title,
} from "./style";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${item._id}`);
  };

  return (
    <Container onClick={handleClick}>
      <Image src={item.image} />

      <InfoContainer>
        <DetailContainer>
          <Title>{item.title}</Title>
          <Price>{`₹ ${item.price}`}</Price>
        </DetailContainer>
        <IconContainer>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <InfoOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderRounded />
          </Icon>
        </IconContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductItem;
