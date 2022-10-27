import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'moment/locale/ko';
import '../../styles/calendar.css';

// react-icon
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { BsFillCaretRightFill } from 'react-icons/bs';
import BookingDetail from '../utilty/BookingDetail';
function Booking() {
  // const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

  const [value, setValue] = useState(new Date());
  const [today, setToday] = useState('');
  const [isDeatail, setIsDeatail] = useState(false);
  const ClickDay = (value, event) => {
    let ctToday = moment(today).format('YYYY-MM-DD');
    let ctValue = moment(value).format('YYYY-MM-DD');
    if (ctToday === ctValue) {
      // 날짜 디테일 페이지로 이동
      setIsDeatail(true);
    } else {
      setToday(ctValue);
    }
  };
  return (
    <div className="calendar_packed">
      {/* selectRange: 여러개 선택하도록 true,false 값  */}
      {isDeatail ? (
        <BookingDetail today={today} />
      ) : (
        <Calendar
          onChange={setValue}
          value={value}
          defaultView="month"
          formatShortWeekday={(locale, date) => {
            return moment(date).format('ddd');
          }}
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
          tileClassName="class_tile"
          view="month"
          navigationLabel={({ date }) => {
            return moment(date).format('MMMM');
          }}
        />
      )}
    </div>
  );
}

export default Booking;
