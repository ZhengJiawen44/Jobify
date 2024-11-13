import { useLoaderData } from "react-router-dom";
import { StatsContainer } from "../components";
import { ChartContainer } from "../components";
import { customFetch as axios } from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await axios.get("jobs/stats");
    return data;
  } catch (error) {
    toast("something went wrong");
  }
};

const Stats = () => {
  const { stats, monthlyApplication } = useLoaderData();

  return (
    <>
      <StatsContainer stats={stats} />
      {monthlyApplication ? (
        <ChartContainer monthlyApplication={monthlyApplication} />
      ) : (
        "no record to display"
      )}
    </>
  );
};
export default Stats;
