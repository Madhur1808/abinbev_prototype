import React from "react";
import { useEffect } from "react";
import ResponsiveAppBar from "./NavBar";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";

import { getToken } from "firebase/messaging";
import { messaging } from "../firebase";
// import { onMessageListner } from "../firebase";

import axios from "axios";
// import { paymentHandler } from "../payment";
// import { makePayment } from "../payment";
import { loadStripe } from "@stripe/stripe-js";

const products = [
  {
    id: 1,
    name: "Product1",
    price: "200",
    qnty: 1,
  },
  {
    id: 2,
    name: "Product2",
    price: "400",
    qnty: 1,
  },
  {
    id: 3,
    name: "Product2",
    price: "600",
    qnty: 1,
  },
];
const makePayment = async () => {
  try {
    const stripe = await loadStripe(
      "pk_test_51OW3wtSHpts77gjzw8raJv1mzcxH73g9xDErrJbOGJnr8l0o5jzoTjJvmR65cXKDeGscE9IC8CQmM4jS5uXILPIK000a1drBOp"
    );

    const response = await axios.post(
      "http://localhost:4000/api/create-checkout-session",
      {
        products,
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch");
    }

    const session = response.data;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log("Error redirecting to checkout:", result.error.message);
    }
  } catch (error) {
    console.error("Payment failed:", error.message);
  }
};

const Landing = () => {
  const navigate = useNavigate();

  //for push notifications
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BN_cJI183R8CE46olW4u9xyaYgsKpxL0MjJhukIr8d-u6q89SoVgNEgzdxpzM55I0UmJDP9BD3A5GgfvlitiDf8",
      });
      console.log("Token Gen", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);
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
            onClick={makePayment}
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
