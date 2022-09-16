import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// react-icon
import { FaWindowClose } from 'react-icons/fa';

const Modal = props => {
  const Navigate = useNavigate();
  const successPage = () => {
    return Navigate('/paysuccess');
  };
  return (
    <ModalOption>
      <Header>
        <FaWindowClose className="close_button" onClick={props.ModalClose} />
      </Header>
      <Body>
        <BodyHeader>$ 150.00</BodyHeader>
        <BodyMain>
          <p>$15*10 class</p>
          <p>$150.00</p>
          <p>tax(10%)</p>
          <p>$15.00</p>
          <p>total</p>
          <p>$165.00</p>
        </BodyMain>
      </Body>
      <Footer>
        <PayButton onClick={() => successPage()}>Pay</PayButton>
      </Footer>
    </ModalOption>
  );
};
const ModalOption = styled.section`
  display: block;
  position: absolute;
  width: 80%;
  height: 100%;
  background-color: white;
  border: black 2px solid;
`;
const Header = styled.div`
  padding: 0.5rem;
  height: 10%;
  .close_button {
    width: 2rem;
    height: 2rem;
    float: right;
    color: #a7f1c9;
    &:hover {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
const Body = styled.div`
  height: 70%;
`;
const BodyHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: bolder;
`;
const BodyMain = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 2rem;
  text-align: center;
  font-size: 24px;
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
`;
const PayButton = styled.button`
  position: relative;
  border: none;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 15px;
  width: 7rem;
  height: 3rem;
  font-family: 'paybooc-Light', sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  background-color: #77af9c;
  font-size: 17px;
  color: #d7fff1;
  &:hover {
    font-size: 22px;
    width: 7.5rem;
    height: 3.2rem;
  }
`;
export default Modal;
