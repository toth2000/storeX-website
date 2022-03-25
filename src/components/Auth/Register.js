import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/auth";
import { loginUser } from "../../redux/action/auth";
import {
  Agreement,
  Container,
  Form,
  Input,
  Title,
  Wrapper,
  Button,
  StyledLink,
} from "./style";

import { setProgress } from "../../redux/action/progress";

const Register = ({ setIsLogin }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    try {
      event.preventDefault();

      if (
        !data.firstName ||
        !data.lastName ||
        !data.username ||
        !data.email ||
        !data.password ||
        !data.confirmPassword
      ) {
        alert("Above fields can not be empty");
        return;
      }

      if (data.password !== data.confirmPassword) {
        alert("Password mismatch");
        return;
      }

      dispatch(setProgress(true));

      const response = await signUp({
        fullName: `${data.firstName} ${data.lastName}`,
        username: data.username,
        email: data.email,
        password: data.password,
      });

      dispatch(loginUser(response.data));
      navigate("/");
    } catch (error) {
      console.log("handleLogin, Auth/Login.js", error?.response);
      if (error?.response?.data?.message) alert(error?.response?.data?.message);
    } finally {
      dispatch(setProgress(false));
    }
  };

  return (
    <Container>
      <Wrapper type="register">
        <Title>Create An Account</Title>
        <Form type="register">
          <Input
            name="firstName"
            onChange={(e) => handleInput(e)}
            value={data.firstName}
            placeholder="First Name"
          />
          <Input
            name="lastName"
            onChange={(e) => handleInput(e)}
            value={data.lastName}
            placeholder="Last Name"
          />
          <Input
            name="username"
            onChange={(e) => handleInput(e)}
            value={data.username}
            placeholder="Username"
          />
          <Input
            type="email"
            name="email"
            onChange={(e) => handleInput(e)}
            value={data.email}
            placeholder="Email"
          />
          <Input
            type="password"
            name="password"
            onChange={(e) => handleInput(e)}
            value={data.password}
            placeholder="Password"
          />
          <Input
            type="password"
            name="confirmPassword"
            onChange={(e) => handleInput(e)}
            value={data.confirmPassword}
            placeholder="Confirm Password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>Privacy Policy</b>
          </Agreement>
          <Button onClick={(e) => handleSignUp(e)}>Create</Button>
        </Form>
        <StyledLink to="/auth" onClick={() => setIsLogin(true)}>
          Already have an account? Sign In
        </StyledLink>
      </Wrapper>
    </Container>
  );
};

export default Register;
