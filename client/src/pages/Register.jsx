import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import { FormRow } from "../components/";
import { customFetch as axios } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("/auth/register/", data);
    toast("login success!");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.err);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="POST" className="form">
        <div>
          <Logo />
          <h4>Register</h4>

          <FormRow id="name" type="text" label="Name" value="Michael" />
          <FormRow
            id="email"
            type="email"
            label="Email"
            value="Micah@gmail.com"
          />
          <FormRow
            id="password"
            type="password"
            label="Password"
            value="zjwhamzaak"
          />

          <FormRow
            id="location"
            type="text"
            label="Location"
            value="Raccoon city"
          />

          <button
            type="submit"
            className=" btn btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering" : "Register"}
          </button>
          <p>
            already have an account? <Link to="/login">login</Link>
          </p>
        </div>
      </Form>
    </Wrapper>
  );
};
export default Register;
