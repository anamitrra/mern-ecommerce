import React from "react";
import styled from "styled-components";
import SavedSearchOutlinedIcon from "@mui/icons-material/SavedSearchOutlined";
import { FavoriteBorderOutlined, ShoppingCart } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  margin: 5px;
`;
const Circle = styled.div``;
const Image = styled.img``;

const Info = styled.div``;

const Icon = styled.div``;

function Product({ item }) {
  return (
    <div>
      <Container>
        <Circle/>
        <Image src={item.img}/>
          <Info>
            <Icon>
              <ShoppingCart />
            </Icon>
            <Icon>
              <SavedSearchOutlinedIcon />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
      </Container>
    </div>
  );
}

export default Product;
