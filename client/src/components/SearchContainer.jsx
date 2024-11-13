import Wrapper from "../assets/wrappers/DashboardFormPage";
import FormRow from "./FormRow";
import { Form } from "react-router-dom";
import FormRowSelect from "./FormRowSelect";
import { STATUS, TYPES } from "../../../utils/constants";
import { Link } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import { useSubmit } from "react-router-dom";
import { useJobContext } from "../pages/AllJobs";
const action = async ({ request }) => {
  console.log(request);
};
const SearchContainer = () => {
  const { search } = useJobContext();

  const submit = useSubmit();
  return (
    <Wrapper>
      <h4 className="form-title">Search Form</h4>
      <Form
        className="form-center"
        onChange={(event) => {
          submit(event.currentTarget);
        }}
      >
        <FormRow id="Search" type="text" label="Search" />
        <FormRowSelect
          id="JobType"
          label="Job Type"
          values={[...Object.values(TYPES), "all"]}
          defaultValue={search.JobType || "all"}
        />
        <FormRowSelect
          id="JobStatus"
          label="Job Status"
          values={[...Object.values(STATUS), "all"]}
          defaultValue={search.JobStatus || "all"}
        />
        <FormRowSelect
          id="Sort"
          label="sort"
          values={["latest", "oldest", "a-z", "z-a", "none"]}
        />
        <SubmitBtn original="Search" loading="Searching..." isFormBtn={true} />
        <Link to="/dashboard" className="btn form-btn delete-btn">
          reset
        </Link>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
