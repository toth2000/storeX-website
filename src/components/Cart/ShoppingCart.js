import React, { useEffect, useState } from "react";

import CartItem from "./CartItem/CartItem";
import SummaryItem from "./SummaryItem/SummaryItem";
import AddressForm from "./AddressForm/AddressFrom";

import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopText,
  ProductInfo,
  ProductSummary,
  SummaryTitle,
  Button,
  FormContainer,
} from "./style";

import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../api/product";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../api/order";
import { verifyPayment } from "../../api/payment";
import { deleteCart } from "../../redux/action/cart";

const ShoppingCart = () => {
  const cartItem = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState({});
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    address3: "",
    landmark: "",
    locality: "",
    city: "",
    pincode: "",
    state: "",
  });

  const getAllProducts = async () => {
    let amount = 0;
    let productList = {};

    await Promise.all(
      cartItem.products.map(async (item) => {
        const { data } = await findProductById(item.productId);
        amount += item.quantity * data.price;
        productList = {
          ...productList,
          [item.productId]: {
            ...data,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
          },
        };
      })
    );

    setTotalPrice(amount);
    setProducts(productList);
  };

  const razorpayCreateOrder = async () => {
    try {
      const { data } = await createOrder(
        formData,
        cartItem.products,
        formData.phoneNumber
      );

      razorpayPayment(data.amount, data.razorpayOrderId, data);
    } catch (error) {
      console.log("Error in handlePayNow createOrder API call", error.response);
    }
  };

  const razorpayPayment = (amount, orderId, order) => {
    const razorpayOrder = {
      key: process.env.REACT_APP_RAZOR_PAY_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "StoreX",
      description: "Shopping at StoreX",
      image: "",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        razorpayVerifyPayment(response, order);
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: user.user.email,
        contact: formData.phoneNumber,
      },
      notes: {
        address: "StoreX Private Ltd.",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(razorpayOrder);

    rzp1.on("payment.failed", function (response) {
      alert("Payment Failed\n", response.error.reason);
      navigate(`order/${order._id}`);
    });

    rzp1.open();
  };

  const razorpayVerifyPayment = async (
    { razorpay_payment_id, razorpay_order_id, razorpay_signature },
    order
  ) => {
    try {
      const { data } = await verifyPayment(
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
      );
    } catch (error) {
      console.log("Shopping Cart Verify Paymeny API Call\n:", error.response);
      console.log("Shopping Cart Verify Paymeny API Call\n:", error);
      alert(
        "Payment Successful but the status could't be updated automatically due to some server error. Kindly send an email to the customer service with order details and the issue will be resolved"
      );
    } finally {
      dispatch(deleteCart([]));
      navigate(`/order/${order._id}`);
    }
  };

  const handleCheckOut = (event) => {
    if (Object.keys(products).length === 0) {
      alert("Cart is empty");
      return;
    }

    if (!user.isLoggedIn) {
      navigate("/auth");
      return;
    }

    if (!isCheckOut) setIsCheckOut(true);
    else handlePayNow(event);
  };

  const handlePayNow = async (event) => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.address1 ||
      !formData.city ||
      !formData.pincode ||
      !formData.state
    ) {
      alert("Fill all required fields to continue");
      return;
    }

    event.preventDefault();
    razorpayCreateOrder();
  };

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    getAllProducts();
  }, [cartItem.isFetchedFromServer]);

  useEffect(() => {
    let productList = {};
    let amount = 0;

    cartItem.products.forEach((item) => {
      if (!products[item.productId]) {
        return;
      }

      amount += item.quantity * products[item.productId].price;

      productList = {
        ...productList,
        [item.productId]: {
          ...products[item.productId],
          quantity: item.quantity,
        },
      };
    });

    setTotalPrice(amount);
    setProducts(productList);
  }, [cartItem.products]);

  return (
    <Container>
      <Wrapper>
        <Title>{isCheckOut ? "Check Out" : "Shopping Cart"}</Title>
        <Top>
          {isCheckOut ? (
            <TopButton onClick={() => setIsCheckOut(false)}>
              &#8592; Back
            </TopButton>
          ) : (
            <>
              <TopButton>Continue Shopping</TopButton>
              <TopText>Your Wishlist (0)</TopText>
            </>
          )}
        </Top>
        <Bottom>
          {isCheckOut ? (
            <FormContainer>
              <AddressForm data={formData} handleInput={handleInput} />
            </FormContainer>
          ) : (
            <ProductInfo>
              {Object.keys(products).map((key) => (
                <CartItem product={products[key]} key={key} />
              ))}
            </ProductInfo>
          )}
          <ProductSummary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem text="Price" amount={(totalPrice * 0.82).toFixed(2)} />
            <SummaryItem text="GST" amount={(totalPrice * 0.18).toFixed(2)} />
            <SummaryItem text="Subtotal" amount={totalPrice.toFixed(2)} />
            <SummaryItem
              text="Shipping"
              amount={totalPrice < 500 ? (1).toFixed(2) : (0).toFixed(2)}
            />
            <SummaryItem
              type="total"
              text="Total"
              amount={
                totalPrice < 500
                  ? (totalPrice + 1).toFixed(2)
                  : totalPrice.toFixed(2)
              }
            />
            <Button onClick={(e) => handleCheckOut(e)}>
              {isCheckOut ? "Pay Now" : "Checkout Now"}
            </Button>
          </ProductSummary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default ShoppingCart;
