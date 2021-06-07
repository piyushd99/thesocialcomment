import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Application", "Selected", "Rejected", "On hold", "Processed"],
  datasets: [
    {
      label: "label",
      data: [12, 19, 3, 5, 2],
      backgroundColor: ["white", "rgba(82,150,255)", "red", "white", "#800080"],
      borderColor: [
        "rgba(0, 0, 0, 1)",
        "rgba(82,150,255)",
        "red",
        "white",
        "#800080",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y",
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 1.5,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const HorizontalBarChart = () => (
  <div class="border border-dark rounded">
    <div className="paddingClass">
      <h2>Total Application</h2>
      <br />
      <div
        style={{
          position: "relative",
          margin: "auto",
          width: "15vw",
        }}
      >
        <Bar data={data} options={options} />
      </div>
    </div>
  </div>
);

export default HorizontalBarChart;
