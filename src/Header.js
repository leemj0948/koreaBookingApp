import { React, useState, useEffect } from 'react';
import styled from 'styled-components';

//쿼리 파라미터로 제목 바꾸기
const Header = () => {
  const [title, setTitle] = useState('Reb Korean');
  const path = window.location.pathname;

  /**
   * 타이틀 받는 함수
   * @returns {string}
   */
  const getTitle = () => {
    let titleName = 'Reb korean';
    switch (path) {
      case '/mypage':
        titleName = 'My Page';
        break;
      case '/course':
        titleName = 'Course';
        break;
      default:
        titleName = titleName;
    }

    return setTitle(titleName);
  };
  useEffect(() => {
    getTitle();
  }, []);

  return (
    <Wapper>
      <Title>{title}</Title>
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
