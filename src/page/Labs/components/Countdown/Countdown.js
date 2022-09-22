import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CounterBox from "../../../../components/CounterBox";
import image4 from "../../../../images/firework.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  max-width: 500px;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 20px;
  filter: blur(1px) grayscale(60%);
`;

const Heading = styled.div`
  justify-content: center;
  display: flex;
  padding-top: 20px;
  color: white;
`;

const CounterBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  text-align: center;
  padding: 30px 10px;
`;

const OverlayTextContainer = styled.div`
  position: absolute;
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
      <ImageContainer>
        <Img src={image4} />
      </ImageContainer>
      <OverlayTextContainer>
        <Heading>
          <h1>New Year 2023</h1>
        </Heading>
        <CounterBoxContainer>
          <CounterBox number={countdown.days} label="Days" />
          <CounterBox number={countdown.hours} label="Hours" />
          <CounterBox number={countdown.mins} label="Minutes" />
          <CounterBox number={countdown.seconds} label="Seconds" />
        </CounterBoxContainer>
      </OverlayTextContainer>
    </Container>
  );
};

export default Countdown;
