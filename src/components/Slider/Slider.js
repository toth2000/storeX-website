import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

import {
  Arrow,
  Button,
  Container,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Title,
  Description,
  Wrapper,
  ImageWrapper,
} from "./style";
import { sliderData } from "./sliderData";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const navigate = useNavigate();

  const handleLeftClick = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
    else setSlideIndex(sliderData.length - 1);
  };

  const handleRightClick = () => {
    if (slideIndex < sliderData.length - 1) setSlideIndex(slideIndex + 1);
    else setSlideIndex(0);
  };

  const handleButtonClick = (link) => {
    navigate(link);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={handleLeftClick}>
        <ArrowLeftOutlined />
      </Arrow>
      {sliderData.map((x) => (
        <Wrapper slideIndex={slideIndex}>
          <Slide bgColor={x.bgColor}>
            <ImageContainer>
              <ImageWrapper>
                <Image src={x.img} />
              </ImageWrapper>
            </ImageContainer>
            <InfoContainer>
              <Title>{x.title}</Title>
              <Description>{x.description}</Description>
              <Button onClick={() => handleButtonClick(x.link)}>
                {x.button}
              </Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
      ))}
      <Arrow direction="right" onClick={handleRightClick}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
