import React from 'react';
import styled from 'styled-components';

const ScheduleCardList = () => {
  // const DummyClass = [
  //   { nth: '4th', day: 'Thr', time: '10:00-10:50' },
  //   { nth: '8th', day: 'Mon', time: '10:00-10:50' },
  //   { nth: '10th', day: 'Wed', time: '13:00-13:50' },
  // ];

  return (
    <Schedule>
      <CardList>
        <Month>
          <p className="nth">nth</p>
          <p className="day">day</p>
        </Month>
        <ClassTime>time</ClassTime>
      </CardList>
    </Schedule>
  );
};
const Schedule = styled.div``;
const CardList = styled.div``;
const Month = styled.div``;
const ClassTime = styled.div``;
export default ScheduleCardList;
