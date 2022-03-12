import React from "react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";
import {
  Container,
  Hr,
  OrderId,
  OrderDate,
  OrderAmount,
  TopContainer,
  ProductContainer,
} from "./Style";

const OrderItem = ({ order }) => {
  const navigate = useNavigate();

  const getOrderDate = () => {
    const date = new Date(order.createdAt);
    return date.toString().split(" GMT")[0];
  };

  const handleClick = () => {
    navigate(`/order/${order._id}`);
  };

  return (
    <Container onClick={handleClick} >
      <TopContainer>
        <OrderId>{`Order Id: ${order._id}`}</OrderId>
        <OrderDate>{`Order Date: ${getOrderDate()}`}</OrderDate>
        <OrderAmount>{`Amount: ₹ ${order.amount}`}</OrderAmount>
      </TopContainer>
      <Hr />
      <ProductContainer>
        {order.products.map((item) => (
          <ProductItem product={item} key={item._id} />
        ))}
      </ProductContainer>
    </Container>
  );
};

export default OrderItem;
