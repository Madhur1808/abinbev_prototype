import React from "react";
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
import ResponsiveAppBar from "./NavBar";
import { Footer } from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AptitudeTest = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(new Array(9).fill("-1"));

  const ans = [
    "Stack",
    "ping",
    "Git",
    "1, 3, 6, 10, 15, ...",
    "32",
    "Root",
    "66",
    "$32",
    "3/8",
  ];

  //   try {
  //     user_data = JSON.parse(fs.readFileSync(user_data_Path, "utf8"));
  //   } catch (error) {
  //     console.log(error);
  //   }

  const onClickHandler = async () => {
    for (let i = 0; i < 9; i++) {
      if (value[i] === "-1") {
        alert("Please answer all the questions");
        return;
      }
    }
    let technical = 0;
    let congnitive = 0;
    let numerical = 0;
    for (let i = 0; i < 3; i++) {
      if (value[i] === ans[i]) {
        technical = technical + 1;
      }
    }
    for (let i = 3; i < 6; i++) {
      if (value[i] === ans[i]) {
        congnitive = congnitive + 1;
      }
    }
    for (let i = 6; i < 9; i++) {
      if (value[i] === ans[i]) {
        numerical = numerical + 1;
      }
    }

    const res = await axios.post(
      "https://sih-r2.onrender.com/userdata",
      {
        email: localStorage.getItem("email"),
        technical: technical,
        cognitive: congnitive,
        numerical: numerical,
      }
    );

    alert("Successfully Submitted!!,You can check your results in Dashboard");

    navigate("/landing");
  };

  const handleChange = (e, ind) => {
    value[ind] = e.target.value;
    setValue(value);
    for (let i = 0; i < 5; i++) console.log(value[i]);
  };

  return (
    <>
      <ResponsiveAppBar theme="dark" />
      <Box sx={{ width: "100%", marginY: "4rem", textAlign: "center" }}>
        <Typography variant="h3">Aptitude Test</Typography>
        <Typography>
          This is an approximation of the complete test just to illustrate the
          working of the prototype.
        </Typography>
      </Box>
      <FormControl sx={{ minWidth: "98vw" }}>
        <Box
          container
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
              <Typography>Ques-1</Typography>
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
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  {" "}
                  In computer science, which data structure is typically used to
                  store elements in a last-in, first-out (LIFO) order?
                </Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(e) => handleChange(e, 0)}
              >
                <FormControlLabel
                  value="Queue"
                  control={<Radio />}
                  label="Queue"
                />
                <FormControlLabel
                  value="Stack"
                  control={<Radio />}
                  label="Stack"
                />
                <FormControlLabel
                  value="Linked List"
                  control={<Radio />}
                  label="Linked List"
                />
                <FormControlLabel
                  value="Hash Table"
                  control={<Radio />}
                  label="Hash Table"
                />
              </RadioGroup>
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
              <Typography>Ques-2</Typography>
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
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  {" "}
                  When troubleshooting a network issue, which command is
                  commonly used to check the connectivity between your computer
                  and a remote server or website?
                </Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(e) => handleChange(e, 1)}
              >
                <FormControlLabel
                  value="ping"
                  control={<Radio />}
                  label="ping"
                />
                <FormControlLabel value="ls" control={<Radio />} label="ls" />
                <FormControlLabel
                  value="grep"
                  control={<Radio />}
                  label="grep"
                />
                <FormControlLabel
                  value="mkdir"
                  control={<Radio />}
                  label="mkdir"
                />
              </RadioGroup>
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
              <Typography>Ques-3</Typography>
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
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  {" "}
                  In a software development context, which of the following
                  version control systems is known for its distributed and
                  decentralized nature?
                </Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(e) => handleChange(e, 2)}
              >
                <FormControlLabel value="CVS" control={<Radio />} label="CVS" />
                <FormControlLabel value="Git" control={<Radio />} label="Git" />
                <FormControlLabel
                  value="Subversion"
                  control={<Radio />}
                  label="Subversion"
                />
                <FormControlLabel
                  value="Mercurial"
                  control={<Radio />}
                  label="Mercurial"
                />
              </RadioGroup>
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
              <Typography>Ques-4</Typography>
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
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  {" "}
                  Which of the following sequences follows the same pattern as
                  the numbers 2, 4, 6, 8, 10, ...?
                </Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(e) => handleChange(e, 3)}
              >
                <FormControlLabel
                  value="3, 6, 9, 12, 15, ..."
                  control={<Radio />}
                  label="3, 6, 9, 12, 15, ..."
                />
                <FormControlLabel
                  value="1, 3, 6, 10, 15, ..."
                  control={<Radio />}
                  label="1, 3, 6, 10, 15, ..."
                />
                <FormControlLabel
                  value="2, 5, 8, 11, 14, ..."
                  control={<Radio />}
                  label="2, 5, 8, 11, 14, ..."
                />
                <FormControlLabel
                  value="4, 8, 12, 16, 20, ..."
                  control={<Radio />}
                  label="4, 8, 12, 16, 20, ..."
                />
              </RadioGroup>
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
              <Typography>Ques-5</Typography>
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
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  {" "}
                  What comes next in the sequence: 2, 4, 8, 16, _?
                </Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(e) => handleChange(e, 4)}
              >
                <FormControlLabel value="24" control={<Radio />} label="24" />
                <FormControlLabel value="32" control={<Radio />} label="32" />
                <FormControlLabel value="64" control={<Radio />} label="64" />
                <FormControlLabel value="12" control={<Radio />} label="12" />
              </RadioGroup>
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
              <Typography>Ques-6</Typography>
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
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  {" "}
                  If "apple" is related to "fruit" in the same way that "dog" is
                  related to "animal," what is the word that "carrot" is related
                  to?
                </Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(e) => handleChange(e, 5)}
              >
                <FormControlLabel
                  value="Vegetable"
                  control={<Radio />}
                  label="Vegetable"
                />
                <FormControlLabel
                  value="Orange"
                  control={<Radio />}
                  label="Orange"
                />
                <FormControlLabel
                  value="Food"
                  control={<Radio />}
                  label="Food"
                />
                <FormControlLabel
                  value="Root"
                  control={<Radio />}
                  label="Root"
                />
              </RadioGroup>
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
              <Typography>Ques-7</Typography>
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
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  {" "}
                  If you add 35 to one-third of a number and get a result of 57,
                  what is the number?
                </Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(e) => handleChange(e, 6)}
              >
                <FormControlLabel value="54" control={<Radio />} label="54" />
                <FormControlLabel value="60" control={<Radio />} label="60" />
                <FormControlLabel value="66" control={<Radio />} label="66" />
                <FormControlLabel value="78" control={<Radio />} label="78" />
              </RadioGroup>
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
              <Typography>Ques-8</Typography>
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
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  {" "}
                  If a shirt originally costs $40, but it's on sale for 20% off,
                  how much will the shirt cost after the discount?
                </Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(e) => handleChange(e, 7)}
              >
                <FormControlLabel value="$8" control={<Radio />} label="$8" />
                <FormControlLabel value="$28" control={<Radio />} label="$28" />
                <FormControlLabel value="$32" control={<Radio />} label="$32" />
                <FormControlLabel value="$48" control={<Radio />} label="$48" />
              </RadioGroup>
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
              <Typography>Ques-9</Typography>
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
                <Typography fontSize={25} sx={{ textAlign: "center" }}>
                  {" "}
                  If you have 3/4 of a pizza and you eat 1/2 of what's left, how
                  much of the pizza have you eaten?
                </Typography>
              </Box>
              <RadioGroup
                sx={{ display: "flex", flexDirection: "row" }}
                onChange={(e) => handleChange(e, 8)}
              >
                <FormControlLabel value="1/4" control={<Radio />} label="1/4" />
                <FormControlLabel value="3/8" control={<Radio />} label="3/8" />
                <FormControlLabel value="5/8" control={<Radio />} label="5/8" />
                <FormControlLabel value="7/8" control={<Radio />} label="7/8" />
              </RadioGroup>
            </Box>
          </Box>
          <Button
            onClick={onClickHandler}
            variant="text"
            sx={{
              ":hover": {
                color: "white",
                backgroundColor: "rgb(124, 60, 240)",
              },
              display: "block",
              backgroundColor: "rgb(140, 86, 248)",
              color: "white",
              paddingX: "2rem",
              marginBottom: "4rem",
            }}
          >
            SUBMIT NOW
          </Button>
        </Box>
      </FormControl>
      <Footer />
    </>
  );
};

export default AptitudeTest;
