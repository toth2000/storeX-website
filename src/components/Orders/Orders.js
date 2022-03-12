import React, { useEffect, useState } from "react";

import { getOrder } from "../../api/order";
import OrderItem from "./OrderItem/OrderItem";
import { Container, Title } from "./style";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getUserOrders = async () => {
    try {
      const { data } = await getOrder();
      setOrders(data);
    } catch (error) {
      console.log("Error in OrderItem.js getOrderAPI method\n", error.response);
    }
  };

  useEffect(() => {
    getUserOrders();
  }, []);

  return (
    <Container>
      <Title>My Orders</Title>
      {orders.map((item) => (
        <OrderItem order={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Orders;
