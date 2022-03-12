import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 1px gray;

  ${mobile({
    height: "50px",
  })}
`;

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex: 1;
  justify-content: space-between;

  ${mobile({
    padding: "10px 0",
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({
    display: "none",
  })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  gap: 5px;

  ${mobile({
    marginLeft: "8px",
  })}
`;

export const Input = styled.input`
  border: none;

  ${mobile({
    width: "50px",
  })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;

  ${mobile({
    justifyContent: "flex-end",
    gap: "10px",
    marginRight: "10px",
    flex: "1.25",
  })}
`;

export const MenuItem = styled.div`
  cursor: pointer;

  ${mobile({
    fontSize: "12px",
  })}
`;

export const Center = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;

  ${mobile({
    fontSize: "24px",
  })}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
