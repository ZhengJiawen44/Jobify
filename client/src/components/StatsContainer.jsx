import React from "react";
import StatItem from "./StatItem";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
const StatsContainer = ({ stats }) => {
  const status = [
    {
      title: "interview",
      count: stats.Interview,
      icon: <FaCalendarCheck />,
      color: "#f87edb",
      bcg: "#fef3c7",
    },
    {
      title: "pending",
      count: stats.Pending,
      icon: <FaSuitcaseRolling />,
      color: "#4c7fae",
      bcg: "#fef3c7",
    },
    {
      title: "rejected",
      count: stats.Rejected,
      icon: <FaBug />,
      color: "#fe4450",
      bcg: "#fef3c7",
    },
  ];
  return (
    <Wrapper>
      {status.map((stat) => {
        return (
          <StatItem
            key={stat.title}
            count={stat.count}
            title={stat.title}
            icon={stat.icon}
            color={stat.color}
            bcg={"#fef3c7"}
          />
        );
      })}
    </Wrapper>
  );
};

export default StatsContainer;
