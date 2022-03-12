import styled from "styled-components";

import { mobile } from "../../../responsive";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column",
  })}
`;
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
  ${mobile({
    width: "150px",
  })}
`;

export const ProductInfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  ${mobile({
    padding: "5px",
  })}
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
export const ProductSize = styled.span``;

export const ProductStock = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  ${mobile({
    paddingRight: "20px",
    alignItems: "flex-end ",
    gap: "5px",
  })}
`;

export const QuantityContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const IconContainer = styled.div`
  border-radius: 50%;
  border: 3px solid red;
  padding: 3px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({
    padding: 0,
  })}
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

export const Hr = styled.hr`
  background-color: gray;
  border: none;
  height: 1px;
`;
