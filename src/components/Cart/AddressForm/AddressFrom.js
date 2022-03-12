import React from "react";

import { Title, Wrapper, Form, Input, Container } from "./style";

const AddressFrom = ({ data, handleInput }) => {

  return (
    <Container>
      <Wrapper>
        <Title>Shipping Details</Title>
        <Form>
          <Input
            name="firstName"
            onChange={(e) => handleInput(e)}
            value={data.firstName}
            placeholder="First Name"
          />
          <Input
            name="lastName"
            onChange={(e) => handleInput(e)}
            value={data.lastName}
            placeholder="Last Name"
          />
          <Input
            type="tel"
            name="phoneNumber"
            onChange={(e) => handleInput(e)}
            value={data.phoneNumber}
            placeholder="Phone Number"
          />
          <Input
            fullWidth={true}
            name="address1"
            onChange={(e) => handleInput(e)}
            value={data.address1}
            placeholder="Address Line 1"
          />
          <Input
            name="address2"
            onChange={(e) => handleInput(e)}
            value={data.address2}
            placeholder="Address Line 2"
          />
          <Input
            name="address3"
            onChange={(e) => handleInput(e)}
            value={data.address3}
            placeholder="Address Line 3"
          />
          <Input
            name="landmark"
            onChange={(e) => handleInput(e)}
            value={data.landmark}
            placeholder="Landmark"
          />
          <Input
            name="locality"
            onChange={(e) => handleInput(e)}
            value={data.locality}
            placeholder="Locality"
          />
          <Input
            name="city"
            onChange={(e) => handleInput(e)}
            value={data.city}
            placeholder="City"
          />
          <Input
            name="pincode"
            onChange={(e) => handleInput(e)}
            value={data.pincode}
            placeholder="Pincode"
          />
          <Input
            name="state"
            onChange={(e) => handleInput(e)}
            value={data.state}
            placeholder="State"
          />
        </Form>
      </Wrapper>
    </Container>
  );
};

export default AddressFrom;
