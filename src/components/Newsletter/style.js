import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60vh;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${mobile({
    height: "50vh",
  })}
`;

export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;

  ${mobile({
    fontSize: "40px",
    margin: "0",
  })}
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({
    fontSize: "18px",
    padding: "0 10px",
    textAlign: "center",
  })}
`;

export const InputContainer = styled.div`
  background-color: white;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  ${mobile({
    width: "70%",
  })}
`;

export const Input = styled.input`
  border: none;
  flex: 5;
  padding: 0 20px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
