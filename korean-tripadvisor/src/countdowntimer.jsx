import React from "react";
import Countdown from "react-countdown";

import "./CountdownTimer.css";
import { Box, Typography } from "@mui/material";

const CountdownTimer = () => {
  const renderer = ({ hours, minutes, seconds, days, completed }) => {
    if (completed) {
      return <div>Countdown completed!</div>;
    } else {
      return (
        <div className="countdown-container">
          <Box sx={{ display: "flex" }}>
            <span className="countdown-part">{days}</span>
            <Typography sx={{ fontSize: "30px" }}>일</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <span className="countdown-part">{hours}</span>
            <Typography sx={{ fontSize: "30px" }}>시간</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <span className="countdown-part">{minutes}</span>
            <Typography sx={{ fontSize: "30px" }}>분</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <span className="countdown-part">{seconds}</span>
            <Typography sx={{ fontSize: "30px" }}>초</Typography>
          </Box>
        </div>
      );
    }
  };

  return <Countdown date={Date.now() + 6000000} renderer={renderer} />;
};

export default CountdownTimer;
