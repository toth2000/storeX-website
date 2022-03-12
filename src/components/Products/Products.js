import React from "react";

import ProductItem from "./ProductItem/ProductItem";
import { Container } from "./style";

const Products = ({products}) => {
  return (
    <Container>
      {products.map((item) => (
        <ProductItem key={item._id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
