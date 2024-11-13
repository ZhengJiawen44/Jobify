import Wrapper from "../assets/wrappers/DashboardFormPage";
import FormRow from "../components/FormRow";
import { Form, redirect } from "react-router-dom";
import FormRowSelect from "../components/FormRowSelect";
import { STATUS, TYPES } from "../../../utils/constants";
import { customFetch as axios } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await axios.post("/jobs", data);
    toast.success("job created");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.err);
    return error?.response?.data?.err;
  }
};
const AddJob = () => {
  return (
    <Wrapper>
      <h4 className="form-title">Add Job</h4>
      <Form className="form-center" method="POST">
        <FormRow id="position" type="text" label="Position" />
        <FormRow id="company" type="text" label="Company" />
        <FormRow id="location" type="text" label="Job Location" />

        <FormRowSelect
          id="type"
          label="Job Type"
          values={Object.values(TYPES)}
        />
        <FormRowSelect
          id="status"
          label="Job Status"
          values={Object.values(STATUS)}
        />

        <button type="submit" className="btn form-btn">
          Submit
        </button>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
