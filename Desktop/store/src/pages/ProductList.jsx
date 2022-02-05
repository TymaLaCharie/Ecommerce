import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import PopularProducts from '../components/Products'

const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;

const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Title>
          Cars
      </Title>
      <FilterContainer>
          <Filter>
              <FilterText>
                  Filter Products:
              </FilterText>
              <Select>
              <Option disabled selected>
              Car-Type
             </Option>
              <Option>Private</Option>
              <Option>Motorbike</Option>
              <Option>SUV</Option>
              </Select>
              <Select>
            <Option disabled selected>
              Year
            </Option>
            <Option>2018</Option>
            <Option>2019</Option>
            <Option>2020</Option>
            <Option>2021</Option>
            <Option>2022</Option>
          </Select>
          </Filter>
          <Filter>
          <FilterText>
                  Sort Products:
            </FilterText>
              <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
          </Filter>
      </FilterContainer>
      <PopularProducts/>
    </Container>
  )
}

export default ProductList

