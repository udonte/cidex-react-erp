import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Line Chart",
      data: [400, 300, 200, 278, 189, 239],
      borderColor: "#8884d8",
      fill: false,
    },
  ],
};

const options = {
  scales: {
    x: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    y: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function LineChartComponent() {
  return <Line data={data} options={options} />;
}

export default LineChartComponent;
