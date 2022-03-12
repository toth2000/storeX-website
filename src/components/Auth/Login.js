import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/auth";
import { loginUser } from "../../redux/action/auth";

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  StyledLink,
} from "./style";

const Login = ({ setIsLogin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      if (!data.email || !data.password) {
        alert("Uername/email or password can't be empty");
        return;
      }
      const response = await signIn({
        username: data.email,
        password: data.password,
      });

      dispatch(loginUser(response.data));
      navigate("/");
    } catch (error) {
      console.log("handleLogin, Auth/Login.js", error?.response);
      if (error?.response?.data?.message) alert(error?.response?.data?.message);
    }
  };

  return (
    <Container>
      <Wrapper type="login">
        <Title>Sign In</Title>
        <Form type="login">
          <Input
            name="email"
            onChange={(e) => handleInput(e)}
            value={data.email}
            placeholder="Email or Username"
            type="email"
          />
          <Input
            name="password"
            onChange={(e) => handleInput(e)}
            value={data.password}
            placeholder="Password"
            type="password"
          />
          <Button onClick={(e) => handleLogin(e)}>Sign In</Button>
          <StyledLink to="/auth" onClick={() => setIsLogin(false)}>
            Create a new account
          </StyledLink>
          <StyledLink to="forgot-password">Forgot Password?</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
