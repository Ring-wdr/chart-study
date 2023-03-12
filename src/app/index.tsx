import { useEffect, useState } from "react";
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export const LinePage = () => {
  const chartData: ChartData<"line"> = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "년도",
        data: [3, 2, 3],
        borderColor: "aqua",
        tension: 0.4,
      },
    ],
  };

  return <Line data={chartData} />;
};
