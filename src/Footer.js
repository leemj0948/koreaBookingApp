import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <FooterSection>
      <ManuIcon />
      <Message />
      <MyPages />
    </FooterSection>
  );
};
const FooterSection = styled.section``;
const ManuIcon = styled.img``;
const Message = styled.img``;
const MyPages = styled.img``;

export default Footer;
