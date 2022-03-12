import styled from "styled-components";

import { mobile } from "../../responsive";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Title = styled.h1`
  margin: 0px;
  padding: 20px;

  ${mobile({
    padding: "10px",
    fontSize: "24px",
  })}
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  ${mobile({
    padding: "0 10px",
  })}
`;

export const LeftFilterContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  ${mobile({
    flexDirection: "column",
    gap: "3px",
  })}
`;

export const Button = styled.div`
  padding: 5px;
  border-radius: 150px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${mobile({
    alignSelf: "flex-end",
    marginRight: "10px",
  })}
`;

export const Wrapper = styled.div`
  display: flex;

  ${mobile({
    flexDirection: "column",
    gap: "10px",
    alignItems: "flex-start",
  })}
`;
