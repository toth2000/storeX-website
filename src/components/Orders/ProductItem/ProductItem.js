import React, { useEffect, useState } from "react";

import { findProductById } from "../../../api/product";

import {
  Container,
  Image,
  ImageContainer,
  InfoContainer,
  InfoText,
  Price,
  PriceContainer,
  ProductName,
} from "./style";

const ProductItem = ({ product }) => {
  const [productData, setProductData] = useState(null);

  const getProduct = async () => {
    try {
      const { data } = await findProductById(product.productId);
      setProductData(data);
    } catch (error) {}
  };

  useEffect(() => getProduct(), []);

  return (
    <Container>
      <ImageContainer>
        <Image src={productData?.image} />
        <ProductName>{productData?.title}</ProductName>
      </ImageContainer>
      <InfoContainer>
        <InfoText>{`Quantity: ${product.quantity}`}</InfoText>
        <InfoText>{`Color: ${product.color.color.toUpperCase()}`}</InfoText>
      </InfoContainer>
      <PriceContainer>
        <Price>{`₹ ${product.amount}`}</Price>
      </PriceContainer>
    </Container>
  );
};

export default ProductItem;
