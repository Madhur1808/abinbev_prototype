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
  // const [userEmail, setuserEmail] = useState("");

  const emailId = localStorage.getItem("email");

  // console.log(newObj);

  const apti = ["Purchase1", "Purchase2", "Purchase3"];

  const rows = [
    createData("Email ID", emailId),
    createData("Your due date", "-"),
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
          <Typography variant="h5">Purchase History</Typography>
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
              {apti.map((index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell align="right">-</TableCell>
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
