import React, { useState } from "react";
import Wrapper from "../assets/wrappers/ChartsContainer";
import AreaChart from "./AreaChartComponent";
import BarChart from "./BarChartComponent";

const ChartContainer = ({ monthlyApplication }) => {
  const [isAreaChart, setAreaChart] = useState(true);
  const toggleChart = () => {
    setAreaChart(!isAreaChart);
  };
  return (
    <Wrapper>
      <h3>ChartContainer</h3>
      <button onClick={toggleChart}>
        {isAreaChart ? "Area Chart" : "Bar Chart"}
      </button>
      {isAreaChart ? (
        <AreaChart monthlyApplication={monthlyApplication} />
      ) : (
        <BarChart monthlyApplication={monthlyApplication} />
      )}
    </Wrapper>
  );
};

export default ChartContainer;
