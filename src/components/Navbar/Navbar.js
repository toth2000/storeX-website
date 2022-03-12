import React, { useEffect } from "react";
import { Search, ShoppingCart } from "@mui/icons-material";

import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  StyledLink,
  Wrapper,
} from "./style";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/action/auth";
import { createCart, getCart, updateCart } from "../../api/cart";
import {
  setCartItemFromServer,
  setIsFetchedFromServer,
} from "../../redux/action/cart";

const Navbar = () => {
  const cartItem = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const getCartFromServer = async () => {
    try {
      const { data } = await getCart();

      if (data) dispatch(setCartItemFromServer(data.products));
      else if (data === null) await createCart([]);
      dispatch(setIsFetchedFromServer(true));
    } catch (error) {
      console.log("Navbar.js, getCartFromServer\n", error.response);
    }
  };

  const updateCartOnServer = async () => {
    await updateCart(cartItem.products);
  };

  useEffect(() => {
    getCartFromServer();
  }, [isLoggedIn]);

  useEffect(() => {
    updateCartOnServer();
    console.log("Updating Cart on Server");
  }, [cartItem.products]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>StoreX</Logo>
          </StyledLink>
        </Center>
        <Right>
          {isLoggedIn ? (
            <>
              <StyledLink to="/order">
                <MenuItem>My Orders</MenuItem>
              </StyledLink>
              <StyledLink to="/">
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/auth?login=false">
                <MenuItem>Register</MenuItem>
              </StyledLink>
              <StyledLink to="/auth?login=true">
                <MenuItem>Sign In</MenuItem>
              </StyledLink>
            </>
          )}
          <StyledLink to="/cart">
            <MenuItem>
              <Badge badgeContent={cartItem.products.length} color="primary">
                <ShoppingCart />
              </Badge>
            </MenuItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
