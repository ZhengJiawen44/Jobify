import { JobsContainer, SearchContainer } from "../components";
import { customFetch as axios } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries(
      new URL(request.url).searchParams.entries()
    );

    const { data } = await axios.get("/jobs", { params });
    const { jobs, jobCount, totalPage, Page } = data;
    return {
      Page: Page,
      jobs: jobs,
      search: params,
      jobCount: jobCount,
      totalPage: totalPage,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const action = async ({ request }) => {};
const jobContext = createContext();
const AllJobs = () => {
  const { jobs, search, jobCount, totalPage, Page } = useLoaderData();

  return (
    <jobContext.Provider value={{ jobs, search, jobCount, totalPage, Page }}>
      <SearchContainer />
      <JobsContainer />
    </jobContext.Provider>
  );
};
export default AllJobs;

export const useJobContext = () => useContext(jobContext);
