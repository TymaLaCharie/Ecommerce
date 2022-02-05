import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

//Left hand side styles
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
`;

//Center hand side styles
const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`

//Right hand side styles
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItems = styled.div`
    font-size: 14px;
    cursor: Pointer;
    margin-left: 25px;
`

const SearchBar = ({ onChange, placeholder }) => {
    return (
        <Input
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
    );
  };

const Navbar = (props) => {
  return (
    <Container>
      <Wrapper>
          <Left>
              <Language>EN</Language>
              <SearchContainer>
                <SearchBar  placeholder="Search" onChange={(e) => props.searchData(e.target.value)} />
                <Search style={{color:"gray", fontsize:16}}/>
              </SearchContainer>
          </Left>
          <Center>
             <Logo>
                 CARSS
            </Logo>
          </Center>
          <Right>
              <MenuItems>Register</MenuItems>
              <MenuItems>Login</MenuItems>
              <MenuItems>
                <Badge badgeContent={4} colour="primary">  
                    <ShoppingCartOutlined/>
                </Badge>
              </MenuItems>
          </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
