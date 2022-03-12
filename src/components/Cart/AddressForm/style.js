import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 0 0 20px 0;
  width: 85%;

  ${mobile({
    width: "90%",
  })};
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0 0 20px 0;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 20px;

  ${mobile({
    padding: "10px",
  })};
`;
