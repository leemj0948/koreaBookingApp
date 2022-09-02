import React from 'react';
import styled from 'styled-components';
import Course from './body/Course';
//쿼리 파라미터로 바뀐 제목 별로 다른 페이지 보이기
const Main = () => {
  return (
    <>
      {/* <MainBody>
 
        <BackgroundImg>
          // <Title>I am here to help you guys.</Title>
          // <NextButton />
      
        </BackgroundImg>
   
      </MainBody> */}
      <Course />
    </>
  );
};
export default Main;

const MainBody = styled.section`
  width: 100%;
  height: 100%;
`;
const BackgroundImg = styled.section``;
const Title = styled.p``;
const NextButton = styled.img``;
