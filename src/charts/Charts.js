import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

export default function Charts({ data }) {
  if (Object.keys(data).length === 0) {
    return (
      <div>
        <Doughnut data={{}} height={400} />
        <Bar
          data={{}}
          width={500}
          height={400}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }

  const data1 = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        data: [data.confirmed, data.recovered, data.deaths],
        backgroundColor: [
          "rgba(255, 153, 0, 0.9)",
          "rgba(51, 204, 51, 0.7)",
          "rgba(255, 0, 0, 0.7)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 153, 0, 1)",
          "rgba(51, 204, 51, 1)",
          "rgba(255, 0, 0, 1)",
        ],
      },
    ],
  };
  const data2 = {
    labels: ["Infected", "Recovered", "Deaths"],
    datasets: [
      {
        label: "COVID-19 Patients",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [data.confirmed, data.recovered, data.deaths],
      },
    ],
  };

  return (
    <div className="charts">
      <div>
        <Doughnut data={data1} height={400} />
      </div>
      <div>
        <Bar
          className="bar"
          data={data2}
          width={500}
          height={400}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
}
