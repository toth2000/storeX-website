import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getOrder } from "../../api/order";
import { setProgress } from "../../redux/action/progress";
import OrderItem from "./OrderItem/OrderItem";
import { Container, Title } from "./style";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const dispatch = useDispatch();

  const getUserOrders = async () => {
    try {
       
      dispatch(setProgress(true))

      const { data } = await getOrder();
      setOrders(data);
    } catch (error) {
      console.log("Error in OrderItem.js getOrderAPI method\n", error.response);
    }
    finally{
      dispatch(setProgress(false))
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
