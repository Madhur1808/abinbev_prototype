import { React, useState, useEffect } from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const SalesRepresentative = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const loginHandler = () => {
    // setSales(true);
    navigate("/");
  };

  const salesLoginHandler = () => {
    navigate("/login");
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
                marginBottom: "50px",
                width: "20vw",
                marginLeft: "150px",
              }}
            >
              For our Customers
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
                onClick={salesLoginHandler}
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
                  marginLeft: "60px",
                }}
              >
                LOGIN as SALES
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SalesRepresentative;
