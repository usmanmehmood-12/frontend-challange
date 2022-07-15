import "../App.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    WeeklyUsers: 2400,
  },
  {
    name: "Feb",

    WeeklyUsers: 1398,
  },
  {
    name: "March",

    WeeklyUsers: 9800,
  },
  {
    name: "Dec",

    WeeklyUsers: 3908,
  },
];

const SimpleChart = () => {
  return (
    <LineChart
      width={350}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="WeeklyUsers"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default SimpleChart;
