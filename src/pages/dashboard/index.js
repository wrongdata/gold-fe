import React from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";

function Index() {
  const daysInMonth = moment().daysInMonth();

  const data = [];
  for (var i = 1; i <= daysInMonth; i++) {
    data.push(i);
  }
  const chart = {
    labels: data,
    datasets: [
      {
        label: "",
        data: Array.from({ length: moment().daysInMonth() }, () =>
          Math.round(Math.random() * 7 + 1)
        ),
        borderColor: "rgba(60, 197, 22,1)",
        backgroundColor: "rgba(60, 197, 22,1)",
        borderWidth: "1",
        pointStyle: "rect",
      },
    ],
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-5 py-20">
        <div className="mx-5 p-5 rounded-2xl shadow-md">
          <h1 className="card-title">Monthly Activity</h1>
          <Bar data={chart}></Bar>
        </div>
        <div className="mx-5 p-5 rounded-2xl shadow-md">
          <h1 className="card-title">Monthly Activity</h1>
          <Bar data={chart}></Bar>
        </div>
      </div>
    </>
  );
}

export default Index;
