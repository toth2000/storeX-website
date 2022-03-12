import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Image, Info, Title, Button } from "./style";

const CategoryItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };



  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => handleClick(item.link)}>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
