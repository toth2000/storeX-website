import styled from "styled-components";

import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: space-between;

  ${mobile({
    padding: "20px 10px",
  })}
`;
