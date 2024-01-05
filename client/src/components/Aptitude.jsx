import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Aptitude = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "80vw",
          margin: "0 auto 0 auto",
          //   justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            // backgroundColor: "pink",
            height: "35vh",
            width: "40vw",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">Why this test ?</Typography>
          <Typography>
            They provide a comprehensive assessment of an individual's
            abilities, including cognitive, emotional, and practical skills,
            helping them make informed career choices that align with their
            strengths and passions. These tests enhance self-awareness, promote
            adaptability in a changing job market, reduce mismatched career
            choices, and guide educational decisions.
          </Typography>
          <Button
            variant="text"
            onClick={() => {
              navigate("/Explore/aptitudeTest");
            }}
            sx={{
              width: "300px",
              backgroundColor: "rgb(140, 86, 248)",
              color: "white",
              ":hover": {
                color: "white",
                backgroundColor: "rgb(124, 60, 240)",
              },
            }}
            // href="/explore/aptitude-test"
          >
            ATTEMPT NOW
          </Button>
        </Box>

        <img src="assets\aptitude_test_img.svg" style={{ width: "38vw" }} />
      </Box>
    </>
  );
};

export default Aptitude;
