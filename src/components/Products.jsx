import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";

const Container = styled.div`

`;

function Products() {
  return <div>
        <Container>
            {popularProducts.map(item=>(
               <product item={item} key={item.id}/>
            ))}
        </Container>
  </div>;
}

export default Products;
