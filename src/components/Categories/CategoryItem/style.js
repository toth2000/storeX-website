import styled from "styled-components";

import { mobile } from "../../../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({
    height: "30vh",
  })}
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  color: white;
`;

export const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: white;
  color: gray;
  cursor: pointer;
  border-radius: 20px;
  font-weight: 600;
`;
