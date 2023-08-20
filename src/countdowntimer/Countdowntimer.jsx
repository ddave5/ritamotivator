import React, { useEffect, useState } from 'react'
import './countdowntimer.css'
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdowntimerUtils'

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00'
}

const Countdowntimer = ({countdownTimeStampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimeStampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (

    <div className='countdown__timer'>
      <span className='two-numbers'>{remainingTime.hours}</span>
      <span>óra</span>
      <span className='two-numbers'>{remainingTime.minutes}</span>
      <span>perc</span>
      <span className='two-numbers'>{remainingTime.seconds}</span>
      <span>másodperc</span>
    </div>
  )
}

export default Countdowntimer