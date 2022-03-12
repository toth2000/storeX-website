import React, { useEffect, useState } from "react";

import {
  Container,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
  FilterContainer,
  AddContainer,
  Button,
  Stock,
} from "./style";

import Filter from "../Filter/Filter";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import { useLocation } from "react-router-dom";

import { addItem } from "../../redux/action/cart";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../api/product";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [option, setOption] = useState({
    color: null,
    size: null,
  });
  const [quantity, setQuantity] = useState(1);
  const [itemExistsInCart, setItemExistsInCart] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart);

  const getProduct = async (id) => {
    const { data } = await findProductById(id);

    setProduct(data);
  };

  const handleFilterChange = (event) => {
    setOption((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value.toLowerCase(),
    }));
  };

  const handleAddToCart = () => {
    if (!option.color || !option.size) return;

    if (itemExistsInCart) return;

    const color = product.color.find((item) => item.color === option.color);

    dispatch(
      addItem({
        productId: product._id,
        quantity: quantity,
        color: { color: color.color, code: color.code },
        size: option.size,
      })
    );

    setItemExistsInCart(true);
  };

  useEffect(() => {
    console.log(cartItem);
    const path = location.pathname.split("/");
    const id = path[2];
    getProduct(id);

    const result = cartItem.products.find((item) => item.productId === id);
    setItemExistsInCart(result ? true : false);
  }, []);

  return (
    <Container>
      {product ? (
        <Wrapper>
          <ImageContainer>
            <Image src={product.image} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Price>{`₹ ${product.price}`}</Price>
            <FilterContainer>
              <Filter
                handleFilterChange={handleFilterChange}
                filter={option.color}
                text="Color"
                name="color"
                isSelectedDisabled={true}
                defaultOption="Select Color"
                options={product.color.map((x) => x.color)}
              />
              <Filter
                handleFilterChange={handleFilterChange}
                filter={option.size}
                text="Size"
                name="size"
                isSelectedDisabled={true}
                defaultOption="Select Size"
                options={product.size}
              />
            </FilterContainer>
            <AddContainer>
              <ProductQuantity
                quantity={quantity}
                stock={product.stock}
                setQuantity={setQuantity}
              />
              <Button addToCart={itemExistsInCart} onClick={handleAddToCart}>
                {itemExistsInCart ? "Added To Cart" : "Add to Cart"}
              </Button>
            </AddContainer>
            <Stock>{`Stock Available: ${product.stock}`}</Stock>
          </InfoContainer>
        </Wrapper>
      ) : null}
    </Container>
  );
};

// handleFilterChange, filter, text, name, isSelectedDisabled,
//  defaultOption, options

export default SingleProduct;
