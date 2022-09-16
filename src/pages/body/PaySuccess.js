import React from 'react';
import styled from 'styled-components';

const PaySuccess = () => {
  return (
    <BackGround>
      <Header>Thank you</Header>
      <Body>
        <p className="start">Let's start</p>
        <p className="korean">Korean journey</p>
        <p className="go">Go to booking page</p>
      </Body>
    </BackGround>
  );
};
const BackGround = styled.section`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #eef5f1;
`;
const Header = styled.h1`
  margin: 0;
  padding: 6rem 1rem 0;
  font-size: 40px;
  text-align: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 5rem;
  width: 227px;
  height: 154px;
  font-size: 24px;
  font-family: 'Brandon Grotesque, Regular', Regular;
  .start {
    text-align: left;
  }
  .korean {
    text-align: right;
  }
  .go {
    text-align: left;
  }
`;
export default PaySuccess;
