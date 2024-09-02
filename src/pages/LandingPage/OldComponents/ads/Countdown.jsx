import React from 'react'

export const Countdown = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
  return (
    <div className='ads__countdown'>
      <div className="ads__countdown-time">
        <span className='time-hand'>{timerDays}</span>
        <span className='title'>DAYS</span>
      </div>
      <span>:</span>
      <div className="ads__countdown-time">
        <span className='time-hand'>{timerHours}</span>
        <span className='title'>HRS</span>
      </div>
      <span>:</span>
      <div className="ads__countdown-time">
        <span className='time-hand'>{timerMinutes}</span>
        <span className='title'>MIN</span>
      </div>
      <span>:</span>
      <div className="ads__countdown-time">
        <span className='time-hand'>{timerSeconds}</span>
        <span className='title'>SEC</span>
      </div>
    </div>
  );
};

Countdown.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes:10,
  timerSeconds:10
};


export default Countdown;