import React, { useEffect, useRef } from "react";
import ResponsiveAppBar from "./SalesNavbar";
import { Grid, Typography, Box } from "@mui/material";
import Chart from "chart.js/auto";

const SalesDashboard = () => {
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);

  // Mock data for sales figures
  const totalSales = 15000;
  const monthlySales = 5000;
  const weeklySales = 1200;

  // Sample data for charts
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [3000, 4000, 6000, 4500, 7000, 6500],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  const pieChartData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        label: "Product Sales",
        data: [3000, 4000, 2000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        radius: "70%",
      },
    ],
  };

  const barChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Bar Chart",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    if (lineChartRef && lineChartRef.current) {
      new Chart(lineChartRef.current, {
        type: "line",
        data: lineChartData,
        options: {
          scales: {
            x: {
              type: "category",
            },
          },
        },
      });
    }

    if (pieChartRef && pieChartRef.current) {
      new Chart(pieChartRef.current, {
        type: "pie",
        data: pieChartData,
      });
    }

    if (barChartRef && barChartRef.current) {
      new Chart(barChartRef.current, {
        type: "bar",
        data: barChartData,
        options: {
          indexAxis: "y",
        },
      });
    }
  }, [lineChartData, pieChartData, barChartData]);

  return (
    <>
      <ResponsiveAppBar />
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          Sales Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {/* ... (previous sales boxes) */}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={2}>
              <Typography variant="h6" gutterBottom>
                Sales Trends (Line Chart)
              </Typography>
              <canvas ref={lineChartRef} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={2}>
              <Typography variant="h6" gutterBottom>
                Product Sales Distribution (Pie Chart)
              </Typography>
              <canvas ref={pieChartRef} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={2}>
              <Typography variant="h6" gutterBottom>
                Sample Bar Chart
              </Typography>
              <canvas ref={barChartRef} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SalesDashboard;
