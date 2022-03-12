import styled from "styled-components";

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
`;

export const OrderId = styled.h6`
  font-weight: 600;
  margin: 0;
  flex: 1;
  padding: 10px;
  text-align: start;
`;

export const OrderDate = styled.h6`
  font-weight: 600;
  margin: 0;
  flex: 1;
  padding: 10px;
  text-align: center;
`;

export const OrderAmount = styled.h6`
  font-weight: 600;
  margin: 0;
  flex: 1;
  padding: 10px;
  text-align: end;
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
