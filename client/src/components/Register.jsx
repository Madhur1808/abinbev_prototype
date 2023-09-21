import { React, useState } from "react";
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

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const registerHandler = async () => {
    try {
      if (
        email == "" ||
        UserName == "" ||
        password == "" ||
        confirmpassword == ""
      )
        alert("Make sure all the details are filled");
      else if (email.indexOf("@") == -1)
        alert("Please enter a valid email address");
      else if (password !== confirmpassword)
        alert("password and confirmPassword does not match");
      else if (password.length < 8)
        alert("Password must have atleast 8 characters");
      else {
        const response = await axios.post(
          "https://sih-r2.onrender.com/signup",
          {
            username: UserName,
            email,
            password,
          }
        );

        console.log(response);
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
            LangMODLabs{" "}
          </Typography>
          <Button
            variant="text"
            onClick={() => {
              navigate("/login");
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
            Login
          </Button>
        </AppBar>
        <Card
          sx={{
            width: 500,
            height: 500,
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
            Please Register with your credentials
          </Typography>
          <TextField
            label="UserName"
            type="text"
            sx={{ width: 300 }}
            value={UserName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <TextField
            label="Email"
            type="email"
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
          <TextField
            label="Confirm Password"
            type="password"
            sx={{ width: 300 }}
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <Button
            variant="text"
            onClick={registerHandler}
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
            Register
          </Button>
        </Card>
      </Box>
    </>
  );
}

export default Register;
