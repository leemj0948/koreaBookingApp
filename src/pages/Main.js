import React from 'react';
import styled from 'styled-components';
import bg from '../img/bg.jpeg';

import { useNavigate } from 'react-router-dom';
//쿼리 파라미터로 바뀐 제목 별로 다른 페이지 보이기

const Main = () => {
  const Navigate = useNavigate();
  const goCoursePage = () => Navigate('/course');
  return (
    <MainBody>
      <BackgroundImg>
        <Title>I am here to help you guys.</Title>
        <NextButton onClick={goCoursePage}>
          <h2>Course</h2>
          <ArrowContainer>
            <ArrowHead />
            <ArrowTail />
          </ArrowContainer>
        </NextButton>
      </BackgroundImg>
    </MainBody>
  );
};
export default Main;

const MainBody = styled.section`
  margin: 0;
  max-width: 375px;
  height: 542px;
  overflow: scroll;
`;
const BackgroundImg = styled.section`
  height: 100%;
  background-size: 100%;
  background-image: url(${bg});
`;
const Title = styled.p`
  margin: 0;
  padding: 20% 0;
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
`;
const NextButton = styled.div`
  padding-top: 260px;
  h2 {
    margin: 0;
    position: absolute;
    right: 105px;
    color: white;
  }
`;
const ArrowContainer = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  top: 45%;
  left: 65%;
  transform: rotate(136deg);
`;
const ArrowHead = styled.div`
  width: 50px;
  height: 32px;
  border: solid white;
  border-width: 0px 0 0 3px;
  left: 0;
  top: 0;
`;
const ArrowTail = styled.div`
  width: 130px;
  height: 4px;
  background-color: white;
  position: absolute;
  transform: rotate(45deg);
  transform-origin: left;
  left: 0;
  top: 0;
`;
