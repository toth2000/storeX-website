import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  background-color: teal;
  padding: 20px;

  ${mobile({
    flexDirection: " column-reverse",
    padding: "0 5px",
    textAlign: "center",
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

  ${mobile({
    padding: "0 20px 20px 20px",
  })}
`;

export const Logo = styled.h1`
  margin-bottom: 0;
`;

export const Description = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 8px;

  ${mobile({
    justifyContent: "center",
  })}
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    padding: "0 20px",
  })}
`;

export const Title = styled.h3`
  margin-bottom: 30px;

  ${mobile({
    marginBottom: "15px",
  })}
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    padding: "20px 20px 0 20px",
  })}
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
