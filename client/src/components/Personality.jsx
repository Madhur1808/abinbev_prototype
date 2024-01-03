import React from "react";
import ResponsiveAppBar from "./NavBar";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Personality = () => {
  const navigate = useNavigate();
  return (
    <>
      <ResponsiveAppBar theme="dark" />
      <Box
        sx={{
          display: "flex",
          maxWidth: "80vw",
          margin: "0 auto 0 auto",
          justifyContent: "center",
          alignItems: "center",
          height: "88vh",
          justifyContent: "space-between",
        }}
      >
        <img src="\assets\personality_test.svg" style={{ width: "38vw" }} />

        <Box
          sx={{
            height: "35vh",
            width: "40vw",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">Why this test ?</Typography>
          <Typography>
            Personality tests are crucial for career decision-making as they
            provide self-awareness, help match individuals with compatible
            professions, reduce career mismatches and dissatisfaction, guide
            skill development, improve interpersonal skills, and inform
            long-term career growth strategies. These assessments empower
            individuals to align their unique traits with suitable career paths,
            increasing the likelihood of career satisfaction and success.
          </Typography>
          <Button
            variant="text"
            onClick={() => {
              navigate("/Explore/personalityTest");
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
            // href="/explore/personality-test"
          >
            ATTEMPT NOW
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Personality;
