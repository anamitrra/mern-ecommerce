import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`;
const ImageContainer = styled.div`
  height: 100vh;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

function Slider() {

    const [slideIndex, setslideIndex] = useState("");
    const handleClick = (direction)=>{

    }

  return (
    <>
      <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
          <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>

        <Wrapper>
          <Slide bg = "f5fafd">
            <ImageContainer>
              <Image src="https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
            </ImageContainer>
            <InfoContainer>
                <Title>WINTER SALE</Title>
                <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                <Button>Buy Now</Button>
            </InfoContainer>
          </Slide>
          <Slide bg = "f5fafd">
            <ImageContainer>
              <Image src="https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
            </ImageContainer>
            <InfoContainer>
                <Title>Flash SALE</Title>
                <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                <Button>Buy Now</Button>
            </InfoContainer>
          </Slide>
          <Slide bg = "f5fafd">
            <ImageContainer>
              <Image src="https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" />
            </ImageContainer>
            <InfoContainer>
                <Title>New Year SALE</Title>
                <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                <Button>Buy Now</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
      </Container>
    </>
  );
}

export default Slider;
