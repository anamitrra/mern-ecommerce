import {  LocalMallOutlined, Search } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  
`;
const Input = styled.input`
border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
  
`

function Navbar() {
  return (
    <Container>
      <Wrapper>
      {/* left side  */}
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search style={{fontSize:16}} />
          </SearchContainer>
        </Left>
        {/* center */}
        <Center><Logo>Pit Stop</Logo></Center>

       {/* Right side */}
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
          <LocalMallOutlined></LocalMallOutlined>
  
</Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
