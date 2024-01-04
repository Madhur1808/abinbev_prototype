import React from "react";
import ResponsiveAppBar from "./NavBar";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <ResponsiveAppBar />

      <Box
        sx={{
          height: "74vh",
          display: "flex",
          width: "90vw",
          margin: "0 auto 0 auto",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3">About Us</Typography>
          <Typography>
            At NexGenChip Technologies, we pioneer the forefront of
            semiconductor innovation, driving the future with our cutting-edge
            chip solutions. Our commitment to technological advancement and
            precision engineering is unparalleled, crafting chips that redefine
            possibilities across industries. Powered by relentless innovation,
            we specialize in developing high-performance semiconductor
            solutions, delivering efficiency, reliability, and transformative
            power. Join us on the journey toward a connected, smarter world as
            we continue to push boundaries and shape the future of semiconductor
            technology.
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/pay");
            }}
            sx={{
              backgroundColor: "#de6c0e",
              ":hover": {
                backgroundColor: "#de6c0e",
                color: "white",
              },
              width: "200px",
              margin: "20px 0 20px 0",
            }}
          >
            Instant pay
          </Button>
          <Typography></Typography>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/chatup");
            }}
            sx={{
              backgroundColor: "#de6c0e",
              ":hover": {
                backgroundColor: "#de6c0e",
                color: "white",
              },
              width: "200px",
              margin: "20px 0 20px 0",
            }}
          >
            ChatUp
          </Button>
        </Box>
        <Box sx={{ width: "40%", display: "flex" }}>
          <img
            src="\assets\survey.svg"
            style={{
              backgroundSize: "cover",
              width: "36vw",
            }}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Landing;
