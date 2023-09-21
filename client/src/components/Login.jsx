import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Card,
  Typography,
  Button,
  TextField,
  Box,
  AppBar,
  Link,
} from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      if (email == "" || password == "")
        alert("Make sure all the details are filled");
      else if (email.indexOf("@") == -1)
        alert("Please enter a valid email address");
      else {
        const response = await axios.post(
          "https://sih-r2.onrender.com/login",
          null,
          {
            headers: {
              email,
              password,
            },
          }
        );

        console.log(response);
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/landing");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <AppBar
        sx={{
          background: "transparent",
          color: "rgb(140, 86, 248)",
          display: "flex",
          width: "100vw",
          height: "60px",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          noWrap
          component="a"
          href="/"
          sx={{
            padding: 2,
            fontWeight: "bold",
            fontSize: "20px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          LangMODLabs
        </Typography>

        <Button
          variant="text"
          onClick={() => {
            navigate("/signup");
          }}
          sx={{
            ":hover": {
              backgroundColor: "rgb(140, 86, 248)",
              color: "white",
            },
            height: "70%",
            marginX: "10px",
            marginY: "auto",
            color: "rgb(140, 86, 248)",
            display: "block",
          }}
        >
          Signup
        </Button>
      </AppBar>

      <Card
        sx={{
          width: 400,
          height: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "rgb(140, 86, 248)",
            fontSize: "1.2rem",
          }}
        >
          Welcome back! Please login
        </Typography>
        <TextField
          label="Email"
          type="text"
          sx={{ width: 300 }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="Password"
          type="password"
          sx={{ width: 300 }}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="text"
          onClick={loginHandler}
          sx={{
            ":hover": {
              color: "white",
              backgroundColor: "rgb(124, 60, 240)",
            },
            my: 2,
            display: "block",
            backgroundColor: "rgb(140, 86, 248)",
            color: "white",
            paddingX: "15px",
          }}
        >
          Login
        </Button>
      </Card>
    </Box>
  );
}

export default Login;
