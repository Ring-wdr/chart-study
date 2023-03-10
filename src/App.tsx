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
import "./App.css";

Chart.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function App() {
  const [data, setData] = useState<string[][]>([]);
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
  useEffect(() => {
    (async () => {
      const dd = await fetch(
        "/ml/machine-learning-databases/iris/iris.data"
      ).then((res) => res.text());
      setData(dd.split("\n").map((row: string) => row.split(",")));
    })();
  }, []);

  return (
    <div className="App">
      <Line data={chartData} />
    </div>
  );
}

export default App;
