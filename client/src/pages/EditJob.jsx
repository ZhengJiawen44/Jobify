import Wrapper from "../assets/wrappers/DashboardFormPage";
import FormRow from "../components/FormRow";
import FormRowSelect from "../components/FormRowSelect";
import { STATUS, TYPES } from "../../../utils/constants";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch as axios } from "../utils/customFetch";
import { redirect } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { SubmitBtn } from "../components";

export const loader = async ({ params }) => {
  try {
    const { data } = await axios.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.err);
    return error?.response?.data?.err;
  }
};

export const action = async ({ request, params }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await axios.patch(`/jobs/${params.id}`, data);
    toast("succesfully updated");

    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.err);
    return error?.response?.data?.err;
  }
};

const EditJob = () => {
  const { job } = useLoaderData();

  return (
    <Wrapper>
      <h4 className="form-title">Edit Job</h4>
      <Form className="form-center" method="POST">
        <FormRow
          id="position"
          type="text"
          label="Position"
          value={job.position}
        />
        <FormRow id="company" type="text" label="Company" value={job.company} />
        <FormRow
          id="location"
          type="text"
          label="Job Location"
          value={job.location}
        />

        <FormRowSelect
          id="type"
          label="Job Type"
          values={Object.values(TYPES)}
          defaultValue={job.type}
        />
        <FormRowSelect
          id="status"
          label="Job Status"
          values={Object.values(STATUS)}
          defaultValue={job.status}
        />

        <SubmitBtn original="Edit" loading="Editing" isFormBtn />
      </Form>
    </Wrapper>
  );
};
export default EditJob;
