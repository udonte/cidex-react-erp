import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const dataset = [2, 1, 3, 3, 4, 5];
  // Data for the bar chart
  const data = {
    labels: [
      "Leadership",
      "Communication",
      "Technical Skills",
      "Teamwork",
      "Organization",
      "Time Management",
    ],
    datasets: [
      {
        label: "labels",
        data: dataset, // Sample data, replace with your actual data
        backgroundColor: dataset.map((i, index) =>
          i > Math.max(...dataset) * (70 / 100)
            ? "rgba(249, 65, 68, 1)"
            : i > Math.max(...dataset) * (50 / 100)
            ? "rgba(4, 205, 109, 1)"
            : i < Math.max(...dataset) * (50 / 100)
            ? "rgba(234, 176, 77, 1)"
            : "rgba(75,192,192,1)"
        ),

        // [
        //   "rgba(75,192,192,0.2)",
        //   "rgba(75,192,192)",
        //   "rgba(4, 205, 109, 1)",
        //   "rgba(234, 176, 77, 1)",
        // ],
        // borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "KPIs",
      },
    },
    scales: {
      y: {
        type: "linear", // Use 'linear' for the y-axis
        beginAtZero: true,
      },
      x: {
        type: "category", // Use 'category' for the x-axis
      },
    },
  };
  return (
    <div className="border">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
