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
      const url = "http://localhost:4000/me";
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

  const salesHandler = () => {
    navigate("/salesrepresentative");
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

            margin: "0 auto 0 auto",
            backgroundColor: "white",
          }}
        >
          <Box sx={{ width: "60%", height: "100vh" }}>
            <img
              src="\assets\NexGenChip Technologies.png"
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
            <Button
              variant="text"
              onClick={salesHandler}
              sx={{
                ":hover": {
                  color: "white",
                  backgroundColor: "#de6c0e",
                },
                display: "block",
                backgroundColor: "#de6c0e",
                color: "white",
                paddingX: "15px",
                fontSize: "1.1rem",
                marginBottom: "50px",
                width: "20vw",
                marginLeft: "150px",
              }}
            >
              For Sales Representative
            </Button>
            <Typography variant="h3" sx={{ marginBottom: "3px" }}>
              Pioneering Tomorrow's Technology Today, with NexGenChip.
            </Typography>
            <Typography variant="h6">
              At NexGenChip's customer management site, experience seamless
              interaction and personalized support. Access real-time updates,
              technical resources, and collaborative tools, ensuring a proactive
              and tailored approach to meet your semiconductor needs
              efficiently.
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
                    backgroundColor: "#de6c0e",
                  },
                  display: "block",
                  backgroundColor: "#de6c0e",
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
                    backgroundColor: "#de6c0e",
                  },
                  display: "block",
                  backgroundColor: "#de6c0e",
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
