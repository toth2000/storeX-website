import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { findOrderById } from "../../../api/order";
import { setProgress } from "../../../redux/action/progress";

import ProductItem from "../ProductItem/ProductItem";

import {
  AddressContainer,
  Container,
  Name,
  Title,
  TopContainer,
  Address,
  Phone,
  OrderInfoContainer,
  OrderInfoText,
  PriceContainer,
  Hr,
  ProductContainer,
} from "./style";

const OrderDetails = () => {
  const location = useLocation();
  const [order, setOrder] = useState(null);

  const dispatch = useDispatch();

  const getOrder = async (orderId) => {
    try {
      dispatch(setProgress(true));

      const { data } = await findOrderById(orderId);
      setOrder(data);
    } catch (error) {
      console.log(error);
      console.log("Error in OrderDetails, getOrder API call\n", order);
    } finally {
      dispatch(setProgress(false));
    }
  };

  const getOrderDateAndTime = () => {
    if (order === null) return;

    const date = new Date(order.createdAt);
    const dateAndTime = date.toString().split(" GMT");

    return dateAndTime[0];
  };

  const getAddress = () => {
    if (!order) return "";

    let address = order.address.address1;

    if (order.address.address2)
      address = address.concat(`, ${order.address.address2}`);
    if (order.address.address3)
      address = address.concat(`, ${order.address.address3}\n`);
    if (order.address.landmark)
      address = address.concat(`, ${order.address.landmark}`);
    if (order.address.locality)
      address = address.concat(`, ${order.address.locality}`);

    address = address.concat(`,\n${order.address.city}`);
    address = address.concat(`, ${order.address.state}`);
    address = address.concat(`, ${order.address.pincode}`);

    return address;
  };

  useEffect(() => {
    const { pathname } = location;

    const params = pathname.split("/");
    const id = params[2];

    getOrder(id);
  }, [location]);

  return (
    <Container>
      <Title>Order Details</Title>
      <Hr />
      <TopContainer>
        <AddressContainer>
          <Name>{`${order?.address?.firstName} ${order?.address.lastName}`}</Name>
          {/* <Address>{`${order?.address.address1}, ${order?.address.address2},\n${order?.address.address2}, ${order?.address.address3}\n${order?.address.landmark}, ${order?.address.locality}\n ${order?.address.city}, ${order?.address.state}, ${order?.address.pincode}`}</Address> */}
          <Address>{getAddress()}</Address>
          <Phone>{`Phone: ${order?.phone}`}</Phone>
        </AddressContainer>
        <OrderInfoContainer>
          <OrderInfoText>{`Order Id: ${order?._id}`}</OrderInfoText>
          <OrderInfoText>
            {`Order Date and Time: ${getOrderDateAndTime()}`}
          </OrderInfoText>
          <OrderInfoText>{`Payment Status: ${
            order?.paymentSuccess ? "Paid" : "Pending"
          }`}</OrderInfoText>
          <OrderInfoText>{`Transaction Id: ${order?.razorpayOrderId}`}</OrderInfoText>
          <OrderInfoText>{`Payment Id: ${order?.razorpayPaymentId}`}</OrderInfoText>
        </OrderInfoContainer>
        <PriceContainer>
          <OrderInfoText>{`Price\t\t\t INR ${(
            order?.amount *
            ((100 - order?.taxPercentage) / 100)
          ).toFixed(2)}`}</OrderInfoText>
          <OrderInfoText>{`GST\t\t\t INR ${(
            order?.amount *
            (order?.taxPercentage / 100)
          ).toFixed(2)}`}</OrderInfoText>
          <OrderInfoText>{`Subtotal\t\t\t INR ${
            order?.amount - order?.shippingCost
          }`}</OrderInfoText>
          <OrderInfoText>{`Shipping\t\t INR ${order?.shippingCost}`}</OrderInfoText>
          <OrderInfoText>{`Total\t\t\t INR ${order?.amount}`}</OrderInfoText>
        </PriceContainer>
      </TopContainer>
      <Hr />
      <ProductContainer>
        {order?.products.map((item) => (
          <ProductItem product={item} key={item._id} />
        ))}
      </ProductContainer>
    </Container>
  );
};

export default OrderDetails;
