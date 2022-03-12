import styled from "styled-components";

import { mobile } from "../../responsive";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  padding: 20px;

  ${mobile({
    padding: "10px 0",
  })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin: 0;

  ${mobile({
    fontSize: "24px",
  })}
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "none" : null)};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 15px;

  ${mobile({
    flexDirection: "column",
    padding: "0 5px",
  })}
`;

export const ProductInfo = styled.div`
  flex: 3;
`;

export const ProductSummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 400px;
`;

export const FormContainer = styled.div`
  flex: 3;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
