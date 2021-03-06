import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
 flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Producttype = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
              <TopButton>
                  CONTINUE SHOPPING
              </TopButton>
              <TopTexts>
                  <TopText>
                    Shopping bag(2)
                  </TopText>
                  <TopText>
                      My wishlist(0)
                  </TopText>
              </TopTexts>
              <TopButton type="filled">
                  CHECKOUT NOW
              </TopButton>
          </Top>
          <Bottom>
              <Info>
                <Product>
                    <ProductDetail>
                    <Image src="https://res.cloudinary.com/tebza/image/upload/v1643976750/My-Shop/car7_l1angd.png"/>
                        <Details>
                            <ProductName>
                                <b>Product:</b> MERCEDES BENZ
                            </ProductName>
                            <ProductId>
                                <b>ID:</b> 12456789
                            </ProductId>
                            <ProductColor color="silver" />
                            <Producttype>
                                <b>Type:</b> SUV
                            </Producttype>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                       <ProductAmountContainer>
                           <Add/>
                           <ProductAmount>
                               1
                           </ProductAmount>
                           <Remove/>
                       </ProductAmountContainer>
                       <ProductPrice>
                           R 1.5M 
                       </ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                    <Image src="https://res.cloudinary.com/tebza/image/upload/v1643972944/My-Shop/car3_ki84ex.png"/>
                        <Details>
                            <ProductName>
                                <b>Product:</b> LAMBORGHINI
                            </ProductName>
                            <ProductId>
                                <b>ID:</b> 987654321
                            </ProductId>
                            <ProductColor color="black" />
                            <Producttype>
                                <b>Type:</b> Private
                            </Producttype>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                       <ProductAmountContainer>
                           <Add/>
                           <ProductAmount>
                               1
                           </ProductAmount>
                           <Remove/>
                       </ProductAmountContainer>
                       <ProductPrice>
                           R 2.5M
                       </ProductPrice>
                    </PriceDetail>
                </Product>
              </Info>
              <Summary>
                <SummaryTitle>
                    ORDER SUMMARY
                </SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>
                        Subtotal
                    </SummaryItemText>
                    <SummaryItemPrice>
                        R 4M
                    </SummaryItemPrice>
                </SummaryItem>   
                <SummaryItem> 
                    <SummaryItemText>
                        Estimated Shipping
                    </SummaryItemText>
                    <SummaryItemPrice>
                        R 100K
                    </SummaryItemPrice>
                </SummaryItem> 
                <SummaryItem>      
                    <SummaryItemText>
                        Shipping Discount
                    </SummaryItemText>
                    <SummaryItemPrice>
                        R -4K
                    </SummaryItemPrice>
                </SummaryItem>   
                <SummaryItem type="total">    
                    <SummaryItemText>
                        Total
                    </SummaryItemText>
                    <SummaryItemPrice>
                        R 4.095M
                    </SummaryItemPrice>
                </SummaryItem>
                <Button>
                    CHECKOUT NOW
                </Button>
              </Summary>
          </Bottom>

      </Wrapper>
    </Container>
  )
}

export default Cart
