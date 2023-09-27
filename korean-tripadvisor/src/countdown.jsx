import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import Logo from "./logo";
import CountdownTimer from "./countdowntimer";
import footerLogo from "./footerlogo.png";

const CountdownPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 3,
        flexDirection: "column",
      }}
    >
      <Logo />
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontFamily: "Noto Sans KR",
            fontSize: "30px",
            textAlign: "center",
            mb: 3,
          }}
        >
          곧 서비스를 시작하겠습니다
        </Typography>
        <CountdownTimer />
        <Box sx={{ maxWidth: "400px", margin: "auto", mt: 10 }}>
          <Typography
            sx={{
              fontFamily: "Noto Sans KR",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            우리가 웹사이트를 개설하면 가장 먼저 알아보세요
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <TextField
            placeholder="이메일 주소를 입력하세요"
            sx={{
              "& .MuiInputBase-root": {
                height: "36.5px",
                borderRadius: "20px",
                border: "none",
                padding: "10px",
              },
              mr: 2,
            }}
          />
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              width: "110px",
            }}
          >
            제출하다
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
          }}
        >
          <img src={footerLogo} alt="logos" />
        </Box>
      </Box>
    </Container>
  );
};

export default CountdownPage;
