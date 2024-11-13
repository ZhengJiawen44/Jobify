import React from "react";
import { useJobContext } from "../pages/AllJobs";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/PageBtnContainer";

export const PageBtnContainer = () => {
  const { search, pathname } = useLocation();
  console.log(search);

  var { totalPage, Page } = useJobContext();
  const navigate = useNavigate();
  Page = parseInt(Page);
  totalPage = parseInt(totalPage);

  //create an array of page buttons
  const btnArray = [];
  for (let i = 0; i < totalPage; i++) {
    btnArray.push(i + 1);
  }

  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={() =>
          Page - 1 > 0 ? navigate("/dashboard?Page=" + (Page - 1)) : null
        }
      >
        <HiChevronDoubleLeft />
        prev
      </button>

      {btnArray.map((element) => {
        return (
          <button
            className={element === Page ? "page-btn active" : "page-btn"}
            key={element}
          >
            {element}
          </button>
        );
      })}

      <button
        className="btn next-btn"
        onClick={() =>
          Page + 1 <= totalPage
            ? navigate("/dashboard?Page=" + (Page + 1))
            : null
        }
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
