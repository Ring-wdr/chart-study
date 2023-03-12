import { useState, useEffect, CSSProperties } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options: ChartOptions<"scatter"> = {
  scales: {
    x: {
      title: {
        display: true,
        text: "sepal length(cm)",
      },
      min: 4,
      max: 8,
      ticks: {
        callback(tickValue) {
          return `${tickValue}cm`;
        },
      },
    },
    y: {
      title: {
        display: true,
        text: "sepal width(cm)",
      },
      min: 1.5,
      max: 5,

      ticks: {
        callback(tickValue) {
          return `${tickValue}cm`;
        },
      },
    },
  },
};

export const style: CSSProperties = {
  width: "40rem",
  height: "30rem",
};

export const ScatterPage = () => {
  const [irisArray, setData] = useState<string[][]>([]);
  const data: ChartData<"scatter"> = {
    datasets: [
      {
        label: "Iris dataset",
        data: irisArray.map(([x, y]) => ({ x: Number(x), y: Number(y) })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  useEffect(() => {
    const ctl = new AbortController();
    const { signal } = ctl;
    (async () => {
      const iris = await fetch(
        "/ml/machine-learning-databases/iris/iris.data",
        { signal }
      ).then((res) => res.text());
      setData(iris.split("\n").map((row: string) => row.split(",")));
    })();

    return () => ctl.abort();
  }, []);
  return <Scatter options={options} data={data} style={style} />;
};
