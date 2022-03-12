import React from "react";

import { categoriesData } from "./categoriesData";
import CategoryItem from "./CategoryItem/CategoryItem";
import { Container } from "./style";

const Categories = () => {
  return (
    <Container>
      {categoriesData.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
