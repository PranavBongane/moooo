import { CChart } from "@coreui/react-chartjs";
import React from "react";

const MilkChart = () => {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Daily Milk Production (in liters)",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [120, 180, 200, 170, 190, 210, 150],
      },
    ],
  };

  return (
    <CChart
      type="line"
     
      data={data}
    />
  );
};

export default MilkChart;
