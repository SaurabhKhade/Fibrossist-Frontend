import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "../../styles/Home.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function App() {
  return (
    <div className={styles.doughnut}>
      <Doughnut data={data} plugins={plugins} options={options} />
    </div>
  );
}

const plugins = [
  {
    beforeDraw: function (chart) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 160).toFixed(2);
      ctx.font = `bold ${fontSize}em sans-serif`;
      ctx.textBaseline = "top";
      var text = "112 Tests",
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;
      ctx.fillStyle = "white";
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  },
];

const data = {
  labels: ["Positive", "Negative"],
  datasets: [
    {
      label: "Cases",
      data: [21, 91],
      backgroundColor: ["hsla(0, 100%, 50%, .7)", "hsla(240, 100%, 50%, .7)"],
      borderColor: ["red", "blue"],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
