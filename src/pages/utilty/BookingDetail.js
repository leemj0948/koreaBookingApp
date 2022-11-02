import { React, useState } from 'react';
import styled from 'styled-components';
import { BsFillXCircleFill } from 'react-icons/bs';
import moment from 'moment';

const BookingDetail = props => {
  const { today, goCalendar } = props;

  let schadules = [
    { time: '09am - 10am', isClass: false },
    { time: '10am - 11am', isClass: false },
    { time: '11am - 12am', isClass: false },
    { time: '12am - 1pm', isClass: false },
    { time: '1pm - 2pm', isClass: false },
    { time: '2pm - 3pm', isClass: true },
    { time: '3pm - 4pm', isClass: false },
    { time: '4pm - 5pm', isClass: false },
    { time: '5pm - 6pm', isClass: false },
    { time: '6pm - 7pm', isClass: false },
  ];
  const changeDate = todays => {
    let month = moment(todays).locale('en').format('MMMM');
    let day = moment(todays).date();

    return `${month}. ${day}`;
  };
  return (
    <Wapper>
      <GoBack>
        <BsFillXCircleFill onClick={() => goCalendar()} />
      </GoBack>

      <SelectDate>{changeDate(today)}</SelectDate>
      <DayDetail>
        {schadules.map((list, idx) => {
          return (
            <TimeSet key={idx}>
              <HourChart>{list.time}</HourChart>
              <ActiveChart isClass={list.isClass} />
            </TimeSet>
          );
        })}
      </DayDetail>
    </Wapper>
  );
};
export default BookingDetail;
const Wapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const GoBack = styled.div`
  position: absolute;
  left: 2rem;
  svg {
    font-size: 1.5rem;
  }
`;
const SelectDate = styled.h1`
  color: #7fdfab;
  size: 32px;
`;
const DayDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 75%;
`;
const TimeSet = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.25rem;
`;
const HourChart = styled.div`
  width: 100px;
  color: #7fdfab;
  size: 14px;
  text-align: left;
`;
const ActiveChart = styled.div`
  width: 150px;
  height: 24px;
  background-color: ${props => (props.isClass ? '#B9DF7F' : '#defcec')};
`;
