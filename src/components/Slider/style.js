import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position relative;
  overflow: hidden;

  ${mobile({
    display: "none",
  })}
`;

export const Arrow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.direction === "left" ? "10px" : null)};
  right: ${(props) => (props.direction === "right" ? "10px" : null)};
  z-index: 2;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}%);
  transition: all 0.5s ease;
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

export const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 700px;
  height: 500px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 70px;
  word-break: break-all;
`;
export const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 3px;
  word-break: word-break;
`;
export const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 15px;
`;
