import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const AreaChartComponent = ({ monthlyApplication }) => {
  console.log(monthlyApplication);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={monthlyApplication} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#2d2f31" fill="#da6da7" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
