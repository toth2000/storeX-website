import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  flex: 3;
  display: flex;
  gap: 10px;
  align-items: center;

  ${mobile({
    flexDirection: "column",
  })}
`;

export const Image = styled.img`
  width: 150px;

  ${mobile({
    width: "70px",
  })}
`;

export const ProductName = styled.span`
  word-break: word-break;

  ${mobile({
    textAlign: "center",
  })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;

  ${mobile({
    alignSelf: "baseline",
  })}
`;

export const InfoText = styled.span``;

export const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;

  ${mobile({
    alignSelf: "baseline",
  })}
`;

export const Price = styled.span``;
