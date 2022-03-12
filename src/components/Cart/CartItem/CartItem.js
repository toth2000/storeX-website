import { DeleteOutlineRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../../redux/action/cart";

import ProductQuantity from "../../ProductQuantity/ProductQuantity";
import {
  Container,
  ProductDetail,
  Image,
  ProductInfoContainer,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductPrice,
  Hr,
  QuantityContainer,
  IconContainer,
  ProductStock,
} from "./style";

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(product._id));
  };

  useEffect(() => {
    dispatch(updateItem({ productId: product._id, quantity: quantity }));
  }, [quantity]);

  return (
    <>
      <Container>
        <ProductDetail>
          <Image src={product.image} />
          <ProductInfoContainer>
            <ProductName>
              <b>Product: </b>
              {product.title}
            </ProductName>
            <ProductId>
              <b>ID: </b>
              {product._id}
            </ProductId>
            <ProductColor color={product.color.code} />
            <ProductSize>
              <b>Size: </b>
              {product.size}
            </ProductSize>
            <ProductStock>
              <b>Stock Available: </b>
              {product.stock}
            </ProductStock>
          </ProductInfoContainer>
        </ProductDetail>
        <PriceDetail>
          <QuantityContainer>
            <ProductQuantity
              quantity={quantity}
              setQuantity={setQuantity}
              stock={product.stock}
            />
            <IconContainer onClick={handleRemoveItem}>
              <DeleteOutlineRounded />
            </IconContainer>
          </QuantityContainer>
          <ProductPrice>{`₹ ${product.price}`}</ProductPrice>
        </PriceDetail>
      </Container>
      <Hr />
    </>
  );
};

export default CartItem;
