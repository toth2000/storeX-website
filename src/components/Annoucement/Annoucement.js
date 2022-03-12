import { CancelOutlined } from "@mui/icons-material";
import React, { useState } from "react";

import { Container, Text } from "./style";

const Annoucement = () => {
  const [visibility, setVisibility] = useState(true);

  return visibility ? (
    <Container>
      <Text>Free Shipping on orders above Rs. 500/-</Text>
      <CancelOutlined
        onClick={() => setVisibility(false)}
        style={{ marginRight: "8px", cursor: "pointer" }}
      />
    </Container>
  ) : null;
};

export default Annoucement;
