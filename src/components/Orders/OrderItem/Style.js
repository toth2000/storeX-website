import styled from "styled-components";
import { mobile } from "../../../responsive";


export const Container = styled.div`
  width: 80%;
  flex-direction: column;
  border-radius: 15px;
  padding: 10px;
  border: 2px gray solid;
  cursor: pointer;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2px",
  })}
`;

export const OrderId = styled.h6`
  font-weight: 600;
  margin: 0;
  flex: 1;
  padding: 10px;
  text-align: start;

  ${mobile({
    padding: "0",
  })}
`;

export const OrderDate = styled.h6`
  font-weight: 600;
  margin: 0;
  flex: 1;
  padding: 10px;
  text-align: center;

  ${mobile({
    padding: "0",
  })}
`;

export const OrderAmount = styled.h6`
  font-weight: 600;
  margin: 0;
  flex: 1;
  padding: 10px;
  text-align: end;

  ${mobile({
    padding: "0",
  })}
`;

export const Hr = styled.hr`
  margin: 0;
  color: black;
`;

export const ProductContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`;
