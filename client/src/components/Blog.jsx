import React from "react";
import { Footer } from "./Footer";
import ResponsiveAppBar from "./NavBar";
import {
  Box,
  FormControl,
  Typography,
  Button,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  backdropClasses,
} from "@mui/material";

const Blog = () => {
  return (
    <>
      <ResponsiveAppBar theme="dark" />

      <Box sx={{ width: "100%", marginY: "4rem", textAlign: "center" }}>
        <Typography variant="h3">Blogs</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
          marginX: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "2rem",
            minWidth: "100%",
            paddingY: "2rem",
            border: "2px solid black",
          }}
        >
          <Box
            sx={{
              width: "10%",
              textAlign: "center",
            }}
          >
            {/* <Typography>Ques-1</Typography> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "90%",
              maxWidth: "90%",
            }}
          >
            <Box sx={{ paddingX: "2rem", paddingBottom: "1rem" }}>
              <Typography variant="h4">
                {" "}
                Navigating the Future: Modern Career Guidance for Gen Z.
              </Typography>
            </Box>
            <Box sx={{ paddingX: "2rem", paddingBottom: "0.5rem" }}>
              <Typography fontSize={20} textAlign={"center"}>
                {" "}
                Summary: Explore innovative strategies and tools that empower
                the latest generation to make informed career choices in a
                rapidly evolving job market.
              </Typography>
            </Box>
            <Button variant="outlined">Read more</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "2rem",
            minWidth: "100%",
            paddingY: "2rem",
            border: "2px solid black",
          }}
        >
          <Box
            sx={{
              width: "10%",
              textAlign: "center",
            }}
          >
            {/* <Typography>Ques-1</Typography> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "90%",
              maxWidth: "90%",
            }}
          >
            <Box sx={{ paddingX: "2rem", paddingBottom: "1rem" }}>
              <Typography variant="h4">
                {" "}
                Tech Titans: Unconventional Career Paths in the Digital Age.
              </Typography>
            </Box>
            <Box sx={{ paddingX: "2rem", paddingBottom: "0.5rem" }}>
              <Typography fontSize={20} textAlign={"center"}>
                {" "}
                Summary: Discover how unconventional career choices, such as
                freelancing, remote work, and digital entrepreneurship, are
                reshaping traditional notions of success.
              </Typography>
            </Box>
            <Button variant="outlined">Read more</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "2rem",
            minWidth: "100%",
            paddingY: "2rem",
            border: "2px solid black",
          }}
        >
          <Box
            sx={{
              width: "10%",
              textAlign: "center",
            }}
          >
            {/* <Typography>Ques-1</Typography> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "90%",
              maxWidth: "90%",
            }}
          >
            <Box sx={{ paddingX: "2rem", paddingBottom: "1rem" }}>
              <Typography variant="h4">
                {" "}
                From AI to AR: Pioneering Careers in Emerging Technologies
              </Typography>
            </Box>
            <Box sx={{ paddingX: "2rem", paddingBottom: "0.5rem" }}>
              <Typography fontSize={20} textAlign={"center"}>
                {" "}
                Summary: Delve into the exciting world of emerging technologies
                and learn how to prepare for, and thrive in, cutting-edge career
                fields like artificial intelligence and augmented reality.
              </Typography>
            </Box>
            <Button variant="outlined">Read more</Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "2rem",
            minWidth: "100%",
            paddingY: "2rem",
            border: "2px solid black",
          }}
        >
          <Box
            sx={{
              width: "10%",
              textAlign: "center",
            }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "90%",
              maxWidth: "90%",
            }}
          >
            <Box sx={{ paddingX: "2rem", paddingBottom: "1rem" }}>
              <Typography variant="h4">
                {" "}
                Green Careers: Navigating the Sustainable Job Market
              </Typography>
            </Box>
            <Box sx={{ paddingX: "2rem", paddingBottom: "0.5rem" }}>
              <Typography fontSize={20} textAlign={"center"}>
                {" "}
                Summary: Find out how environmental awareness and sustainability
                are influencing career choices and learn how to pursue a
                meaningful and eco-conscious career in today's world.
              </Typography>
            </Box>
            <Button variant="outlined">Read more</Button>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Blog;
