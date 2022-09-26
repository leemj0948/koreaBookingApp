import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'moment/locale/ko';

// react-icon
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsFillCaretRightFill } from 'react-icons/bs';
function Booking() {
  // const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

  const [value, setValue] = useState(new Date());
  const [today, setToday] = useState('');
  const ClickDay = (value, event) => {
    setToday(value);
    console.log(today);
  };
  return (
    <div>
      <Calendar
        onChange={setValue}
        value={value}
        defaultView="month"
        formatDay={(locale, date) => {
          return moment(date).format('DD');
        }}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month"
        next2Label={null}
        prev2Label={null}
        prevLabel={<BsFillCaretLeftFill />}
        nextLabel={<BsFillCaretRightFill />}
        onClickDay={ClickDay}
      />
    </div>
  );
}

export default Booking;
