import React from "react";
import { Add, Remove } from "@mui/icons-material";

import { AmountContainer, Amount } from "./style";

const ProductQuantity = ({ quantity, stock, setQuantity }) => {
  const handleQuantityChange = (increment) => {
    if (increment && quantity < stock)
      setQuantity((prevState) => prevState + 1);
    else if (!increment && quantity > 1)
      setQuantity((prevState) => prevState - 1);
  };

  return (
    <AmountContainer>
      <Remove
        style={{ cursor: "pointer" }}
        onClick={() => handleQuantityChange(false)}
      />
      <Amount>{quantity}</Amount>
      <Add
        style={{ cursor: "pointer" }}
        onClick={() => handleQuantityChange(true)}
      />
    </AmountContainer>
  );
};

export default ProductQuantity;
