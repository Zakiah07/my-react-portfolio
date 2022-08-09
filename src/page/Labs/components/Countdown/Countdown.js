import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 80px;
  gap: 30px;
`;

const newYears = "1 Jan 2023";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newYearsDate = new Date(newYears);
      const currentDate = new Date();

      const totalseconds = (newYearsDate - currentDate) / 1000;

      const days = Math.floor(totalseconds / 3600 / 24);
      const hours = Math.floor(totalseconds / 3600) % 24;
      const mins = Math.floor(totalseconds / 60) % 60;
      const seconds = Math.floor(totalseconds) % 60;

      setCountdown({ days, hours, mins, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <h1>New Year 2023</h1>
      <div id="countdown-container">
        <div id="countdown-el days-c">
          <p id="days">{countdown.days}</p>
          <span>Days</span>
        </div>
        <div id="countdown-el hours-c">
          <p id="hours">{countdown.hours}</p>
          <span>Hours</span>
        </div>
        <div id="countdown-el mins-c">
          <p id="mins">{countdown.mins}</p>
          <span>Mins</span>
        </div>
        <div id="countdown-el seconds-c">
          <p id="seconds">{countdown.seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
    </Container>
  );
};

export default Countdown;
