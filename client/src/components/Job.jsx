import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Job = ({ jobID, position, company, location, date, type, status }) => {
  const [isDeleteModalOpen, setDeleteModal] = useState(false);
  const toggleDeleteModel = () => {
    setDeleteModal(!isDeleteModalOpen);
  };

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{position.substring(0, 1)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={location} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={type} />
          <div className="status">{status}</div>
          <div className="actions">
            <Link to={`edit-job/${jobID}`} className="btn edit-btn">
              edit
            </Link>
            <button className="btn edit-btn" onClick={toggleDeleteModel}>
              delete
            </button>
          </div>
        </div>
      </div>
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        setDeleteModal={toggleDeleteModel}
        jobID={jobID}
      />
    </Wrapper>
  );
};
export default Job;
