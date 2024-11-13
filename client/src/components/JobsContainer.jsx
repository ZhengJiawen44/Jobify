/* eslint-disable react/prop-types */
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "./Job";
import { useJobContext } from "../pages/AllJobs";
import { PageBtnContainer } from "./PageBtnContainer";
const JobsContainer = () => {
  const { jobs, jobCount, totalPage } = useJobContext();

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h4>No jobs to display...</h4>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {jobCount}
        {jobCount <= 1 ? " job found" : " jobs found"}
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return (
            <Job
              key={job._id}
              jobID={job._id}
              position={job.position}
              company={job.company}
              location={job.location}
              date={job.createdAt}
              type={job.type}
              status={job.status}
            />
          );
        })}
      </div>
      {totalPage > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default JobsContainer;
