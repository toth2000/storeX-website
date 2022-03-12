import styled from "styled-components";

import { mobile } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  padding: 50px;

  ${mobile({
    flexDirection: "column",
    padding: "0",
  })}
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({
    height: "50vh",
  })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({
    padding: "20px 15px",
  })}
`;

export const Title = styled.h1`
  font-weight: 200;

  ${mobile({
    margin: "0",
    fontSize: "28px",
  })}
`;

export const Description = styled.p`
  word-break: break-word;
  margin: 20px 0;
  white-space: pre-line;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;

  ${mobile({
    fontSize: "28px",
    fontWeight: "300",
  })}
`;

export const FilterContainer = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 50px;

  ${mobile({
    padding: "15px 0",
  })};
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column",
    padding: "10px",
    gap: "15px",
    alignItems: "flex-start",
  })}
`;

export const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: ${(props) => (props.addToCart ? "not-allowed" : "pointer")};
  border-radius: 15px;
  font-weight: 500;

  &:hover {
    background-color: lightgreen;
  }
`;

export const Stock = styled.p`
  font-size: 18px;
`;
