import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: 300;

  ${mobile({
    margin: 0
  })}
`;

export const TopContainer = styled.div`
  display: flex;
  width: 90%;

  ${mobile({
    flexDirection: "column",
    gap: "25px"
  })}
`;

export const AddressContainer = styled.div`
  flex: 2;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const Name = styled.p``;

export const Address = styled.span`
  white-space: pre-line;
`;

export const Phone = styled.p``;

export const OrderInfoContainer = styled.div`
  flex: 2;
  flex-direction: column;
  jusitfy-content: center;
  display: flex;
  justify-content: center;
`;

export const OrderInfoText = styled.p`
  margin: 0 0 3px 0;
  display: block;
  white-space: break-spaces;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

export const Hr = styled.hr`
  color: black;
  width: 100%;
`;

export const ProductContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
  width: 80%;
`;
