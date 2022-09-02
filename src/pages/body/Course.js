import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Course = () => {
  const ClassDetail = [
    {
      name: 'Trial Class',
      option: '$3 / 25 min',
      detail: 'Lorem ipsum dolor sit amet, consectuetur adipiscing elit, sed',
    },
    {
      name: 'Regular Class',
      option: '$18 / 50 min',
      detail: 'Lorem ipsum dolor sit amet, consectuetur adipiscing elit, sed',
    },
    {
      name: 'Subscribe Class',
      option: '$15 / 50 min',
      detail: 'Lorem ipsum dolor sit amet, consectuetur adipiscing elit, sed',
    },
  ];
  return (
    <>
      {ClassDetail.map(list => {
        return (
          <ClassCard>
            <ClassName>{list.name}</ClassName>
            <Option>{list.option}</Option>
            <Detail>{list.detail}</Detail>
          </ClassCard>
        );
      })}
    </>
  );
};
const ClassCard = styled.div``;
const ClassName = styled.h1``;
const Option = styled.p``;
const Detail = styled.p``;
export default Course;
