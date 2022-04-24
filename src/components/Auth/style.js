import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://miro.medium.com/max/2000/1*goGPwn50r5CuNC_dlXnU9A.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: ${(props) => (props.type === "register" ? 40 : 25)}%;
  background-color: teal;

  ${mobile({
    width: "70%",
  })}
  
`;

export const Title = styled.h1`
  margin: 0;
  padding: 20px;
  color: white;
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: ${(props) => (props.type === "register" ? "wrap" : null)};
  flex-direction: ${(props) => (props.type === "login" ? "column" : "row")};
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

export const Agreement = styled.span`
  color: white;
  font-size: 12px;
  margin: 20px 0;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: gray;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  curosr: pointer;
`;
