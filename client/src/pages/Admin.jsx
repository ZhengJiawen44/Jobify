import { toast } from "react-toastify";
import { redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { StatItem } from "../components";
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";

export const loader = async () => {
  try {
    const response = await customFetch.get("/user/admin/stats");
    const { jobCount } = response.data;
    const { userCount } = response.data;
    const stats = { jobs: jobCount, users: userCount };
    return stats;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const stats = useLoaderData();

  return (
    <Wrapper>
      <StatItem
        count={stats.users}
        title="users"
        icon={<FaSuitcaseRolling />}
        color="#e9b949"
        bcg="#fcefc7"
      />
      <StatItem
        count={stats.jobs}
        title="jobs"
        icon={<FaCalendarCheck />}
        color="#647acb"
        bcg="#e0e8f9"
      />
    </Wrapper>
  );
};
export default Admin;
