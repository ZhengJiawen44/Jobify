import Wrapper from "../assets/wrappers/DashboardFormPage";
import FormRow from "../components/FormRow";
import { Form, useNavigation } from "react-router-dom";
import { customFetch as axios } from "../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("picture");
    if (file && file.size >= 500000) {
      toast("image size cannot exceed 5mb");
      return null;
    }

    await axios.patch("/user", formData);
    return toast("succesfullly updated user!");
  } catch (error) {
    toast.error(error?.response?.data?.err);
    return error;
  }
};

export const loader = async () => {
  try {
    const user = await axios.get("./user");
    return user;
  } catch (error) {
    toast("something wrong happened");
    return error;
  }
};

const Profile = () => {
  const { data } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <h4 className="form-title">Profile</h4>
      <Form className="form-center" method="POST" encType="multipart/form-data">
        <FormRow id="picture" type="file" label="Profile Picture" />
        <FormRow id="name" type="text" label="name" value={data.user.name} />
        <FormRow
          id="email"
          type="email"
          label="Email"
          value={data.user.email}
        />
        <FormRow
          id="location"
          type="text"
          label="Location"
          value={data.user.location}
        />
        <button type="submit" className="btn form-btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default Profile;
