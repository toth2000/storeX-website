import styled from "styled-components";

import { mobile } from "../../responsive";

export const FilterContainer = styled.div`
  margin: 0;
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;

  ${mobile({
    margin: "0",
    fontSize: "14px",
  })}
`;

export const Select = styled.select`
  padding: 10px;

  ${mobile({
    padding: "5px",
    margin: "0",
  })}
`;

export const Options = styled.option``;
