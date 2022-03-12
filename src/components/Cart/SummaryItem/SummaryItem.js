import React from "react";

import { Container, SummaryItemText, SummaryPrice } from "./style";

const SummaryItem = ({ type, text, amount }) => {
  return (
    <Container type={type}>
      <SummaryItemText>{text}</SummaryItemText>
      <SummaryPrice>{`INR ${amount}`}</SummaryPrice>
    </Container>
  );
};

export default SummaryItem;
