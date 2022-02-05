import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
 font-weight: 200;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-item: center;

`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: point;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }

`;


const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Wrapper>
          <ImgContainer>
            <Image src = "https://res.cloudinary.com/tebza/image/upload/v1643976751/My-Shop/car8_flqes7.png"/>
          </ImgContainer>
          <InfoContainer>
              <Title>
                MERCEDES BENZ 4 MATIC
              </Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quis, eos neque ipsum nulla quam deleniti porro, est commodi recusandae assumenda quibusdam fuga tenetur vitae aliquid distinctio, esse dicta praesentium.
              </Description>
              <Price>
                  R 1 500 000.00
              </Price>
              <FilterContainer>
              <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>           
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount> 1 </Amount>
                    <Add/>
                </AmountContainer>   
                <Button>ADD TO CART</Button>             
              </AddContainer>
          </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product
