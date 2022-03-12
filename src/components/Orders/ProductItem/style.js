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
`;

export const Image = styled.img`
  width: 150px;
  ${mobile({
    width: "90px",
  })}
`;

export const ProductName = styled.span`
  word-break: word-break;
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InfoText = styled.span``;

export const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const Price = styled.span``;
