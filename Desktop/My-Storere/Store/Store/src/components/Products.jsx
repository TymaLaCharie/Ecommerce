import React, {useState} from 'react';
import styled from 'styled-components';
import products from '../shared/cars.json';
import Product from './Product';

import Fuse from "fuse.js";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const PopularProducts = (props) => {

  
  return (
    <Container>
      {props.products.map(item=>(
          <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default PopularProducts
