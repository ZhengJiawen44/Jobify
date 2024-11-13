import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const BarChartComponent = ({ monthlyApplication }) => {
  console.log(monthlyApplication);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={monthlyApplication} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" stroke="#2d2f31" fill="#da6da7" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
