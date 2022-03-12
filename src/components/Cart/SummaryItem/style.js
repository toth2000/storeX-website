import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => (props.type === "total" ? "500" : null)};
  font-size: ${(props) => (props.type === "total" ? "24px" : null)};
`;

export const SummaryItemText = styled.span``;

export const SummaryPrice = styled.span``;
