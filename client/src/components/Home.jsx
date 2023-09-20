import { React, useState, useEffect } from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  ///for protected routes
  useEffect(() => {
    const fetchme = async () => {
      const url = "https://sih-r2-backend.onrender.com/me";
      const token = localStorage.getItem("token");
      console.log(token);
      // Check if the token exists before making the request
      if (token) {
        try {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log(response);
          if (response.data) {
            localStorage.setItem("email", response.data.email);
            setEmail(response.data.email);
            // console.log(email);
            navigate("/landing");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchme();
  }, []);

  const loginHandler = () => {
    navigate("/login");
  };
  const signupHandler = () => {
    navigate("/signup");
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100vh",
            // width: "75vw",
            margin: "0 auto 0 auto",
            backgroundColor: "white",
          }}
        >
          <Box sx={{ width: "60%", height: "100vh" }}>
            <img
              src="\assets\SIH_dataset.svg"
              style={{ width: "100%", height: "100vh" }}
            />
          </Box>
          <Box
            sx={{
              width: "40%",
              height: "100%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <Typography variant="h3" sx={{ marginBottom: "3px" }}>
              Getting Started
            </Typography>
            <Typography variant="h6">
              Here, you will find everything essential for accessing top-tier
              career guidance, ensuring that your professional path is
              illuminated with clarity and precision.
            </Typography>

            <Box
              sx={{
                padding: "1.23rem",
                width: "20vw",
                display: "flex",
                justifyContent: "space-between",
                // backgroundColor: "pink",
                margin: "0 auto 0 auto ",
              }}
            >
              <Button
                variant="text"
                onClick={loginHandler}
                sx={{
                  ":hover": {
                    color: "white",
                    backgroundColor: "rgb(124, 60, 240)",
                  },
                  display: "block",
                  backgroundColor: "rgb(140, 86, 248)",
                  color: "white",
                  paddingX: "15px",
                  fontSize: "1.1rem",
                }}
              >
                LOGIN
              </Button>

              <Button
                variant="text"
                onClick={signupHandler}
                sx={{
                  ":hover": {
                    color: "white",
                    backgroundColor: "rgb(124, 60, 240)",
                  },
                  display: "block",
                  backgroundColor: "rgb(140, 86, 248)",
                  color: "white",
                  paddingX: "15px",
                  fontSize: "1.1rem",
                }}
              >
                SIGNUP
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
