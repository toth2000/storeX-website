import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  height: 350px;
  align-items: center;
  background-color: #dcd6f7;
  position: relative;
`;

export const Image = styled.img`
  height: 100%;
  z-index: 2;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 3;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

export const DetailContainer = styled.div`
  padding: 0 20px;
`;

export const Title = styled.h2`
  color: white;
  font-weight: 300;
`;

export const Price = styled.h2`
  color: white;
  font-weight: 600;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: blue;
    transform: scale(1.2);
  }
`;
