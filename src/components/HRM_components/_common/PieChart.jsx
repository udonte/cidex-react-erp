import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ labels = [] }) => {
  // Sample data for the pie chart
  const chartData = {
    labels: labels,
    datasets: [
      {
        // label: "My First Dataset",
        data: [1, 1, 1, 1],
        backgroundColor: ["#0D99FF", "#34A853", "#D5281B", "#FFA959"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
