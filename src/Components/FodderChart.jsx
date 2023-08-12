import { CChart } from "@coreui/react-chartjs";
import React from "react";

const FodderChart = () => {
  return (
    <CChart
      type="bar"
      data={{
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Daily Fodder Use",
            backgroundColor: "rgba(54, 162, 235, 0.8)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
          {
            label: "Fodder Wastage",
            backgroundColor: "rgba(255, 99, 132, 0.8)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
          },
          {
            label: "Current Fodder Stock",
            backgroundColor: "rgba(75, 192, 192, 0.8)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            data: [25, 30, 45, 50, 55, 60, 65, 70, 75],
          },
        ],
      }}
      options={{
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
};

export default FodderChart;
