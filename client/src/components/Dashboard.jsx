import ResponsiveAppBar from "./NavBar";
import { Footer } from "./Footer";
import { React, useEffect, useState } from "react";
import axios from "axios";
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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories) {
  return { name, calories };
}

const Dashboard = () => {
  const [newObj, setNewObj] = useState({});
  const [p_test, setPTest] = useState(false);
  const [a_test, setATest] = useState(false);

  useEffect(() => {
    const url = "https://sih-r2.onrender.com/dashboard";
    const dashboardHandler = async () => {
      try {
        const response = await axios.get(url);

        console.log("this is response data", response.data);

        const response_Array = response.data;
        const user_email = localStorage.getItem("email");

        const userIndex = response_Array.findIndex((user) => {
          return user.email === user_email;
        });

        if (userIndex != -1) {
          const obj = response_Array[userIndex];
          setNewObj(obj);
          console.log(obj);
          if (obj.hasOwnProperty("personality")) {
            setPTest(true);
          }
          if (obj.hasOwnProperty("technical")) {
            setATest(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    dashboardHandler();
  }, []);

  let person = "-";
  let emailID = newObj.email;
  let tech = "-";
  let num = "-";
  let cog = "-";

  console.log(newObj);
  if (p_test) {
    person = newObj.personality;
    console.log(person);
  }
  if (a_test) {
    tech = newObj.technical;
    num = newObj.numerical;
    cog = newObj.cognitive;
  }

  const score = (score_value) => {
    if (score_value === 3) return "🟢";
    else if (score_value <= 1) return "🔴";
    else if (score_value == "-") return "-";
    else return "🟡";
  };
  const apti = [
    createData("Numerical Aptitude", score(num)),
    createData("Technical Aptitude", score(tech)),
    createData("Coginitive Aptitude", score(cog)),
  ];

  const rows = [
    createData("Email ID", emailID),
    createData("Personality Test Results", person),
  ];
  return (
    <>
      <ResponsiveAppBar theme="dark" />
      <Box sx={{ height: "72vh" }}>
        <Box sx={{ width: "100%", marginY: "1rem", textAlign: "center" }}>
          <Typography variant="h5">User Profile</Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{ width: "35vw", marginX: "auto", marginBottom: "1rem" }}
        >
          <Table
            sx={{ width: "35vw", marginX: "auto" }}
            size="large"
            aria-label="a dense table"
          >
            {/* <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Shubham Rastogi</TableCell>
                        </TableRow>
                    </TableHead> */}
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ width: "100%", marginY: "1rem", textAlign: "center" }}>
          <Typography variant="h5">Aptitude Test Results</Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{ width: "35vw", marginX: "auto", marginBottom: "1rem" }}
        >
          <Table
            sx={{ width: "35vw", marginX: "auto" }}
            size="large"
            aria-label="a dense table"
          >
            <TableHead></TableHead>
            <TableBody>
              {apti.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Footer />
    </>
  );
};

export default Dashboard;
