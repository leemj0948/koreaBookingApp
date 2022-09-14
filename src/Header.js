import React from 'react';
import styled from 'styled-components';
//쿼리 파라미터로 제목 바꾸기
const Header = () => {
  return (
    <Wapper>
      <Title>Reb Korean</Title>
    </Wapper>
  );
};
export default Header;
const Wapper = styled.section`
  width: 100%;
  height: 68px;
  background-color: #7fdfab;
`;
const Title = styled.h1`
  display: flex;
  align-content: center;
  justify-content: space-around;
  margin: 0px;
  padding: 3vh;
  color: white;
  font-family: 'Adobe Handwriting Tiffany';
`;