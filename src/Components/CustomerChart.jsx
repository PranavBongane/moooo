import { CChart } from "@coreui/react-chartjs";
import React from "react";

const DailyCustomersChart = () => {
  return (
    <CChart
      type="doughnut"
      data={{
        labels: ["New Customers", "Returning Customers"],
        datasets: [
          {
            backgroundColor: ["#FF6384", "#36A2EB"],
            data: [80, 20],
          },
        ],
      }}
      options={{
        legend: {
          position: "bottom",
        },
      }}
    />
  );
};

const CommercialCustomersChart = () => {
  return (
    <CChart
      type="doughnut"
      data={{
        labels: ["New Customers", "Returning Customers"],
        datasets: [
          {
            backgroundColor: ["#FF6384", "#36A2EB"],
            data: [40, 60],
          },
        ],
      }}
      options={{
        legend: {
          position: "bottom",
        },
      }}
    />
  );
};

const CustomersChart = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%" }}>
        <DailyCustomersChart />
      </div>
      <div style={{ width: "50%" }}>
        <CommercialCustomersChart />
      </div>
    </div>
  );
};

export default CustomersChart;
