import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, AssignmentOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
    object-fit: cover;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

{/*const ProductDetails =() =>{

    return(
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    )
}*/}
  const Product = ({item}) => {

    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <>
    <Container>
      <Circle/>
      <Image src={item.img} />
      <Info>
          <Icon>
              <ShoppingCartOutlined/>              
          </Icon>
          <Icon>
              <SearchOutlined/>              
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>              
          </Icon>
          <Icon onClick={openModal}>
            <AssignmentOutlined/>
          </Icon>
      </Info>
      
    </Container>
    <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{item.vehicle}</h2>
        <img src={item.img} style={{width: '300px', height: '300px'}}/>
        <div>{item.description}</div>
        <div>{item.price}</div>
        <button style={{margin: '10px',  cursor: 'pointer',  fontweight: '500',  padding: '11px 28px',  borderradius: '12px',  fontsize: '0.8rem',  border: 'none', color: '#fff',  background: '#ff3e4e'}} onClick={closeModal}>close</button>
        
      </Modal>
    </>
  )
}

export default Product
