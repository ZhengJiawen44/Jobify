import { Form, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/ConfirmDelete";
import { customFetch as axios } from "../utils/customFetch";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const action = async ({ params }) => {
  try {
    const { id } = params;
    await axios.delete(`/jobs/${id}`);
    toast("succesfully deleted");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.err);
  }
};

const DeleteModal = ({ isDeleteModalOpen, setDeleteModal, jobID }) => {
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape" && isDeleteModalOpen) {
        setDeleteModal();
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isDeleteModalOpen, setDeleteModal]);

  return (
    <Wrapper>
      <div className={isDeleteModalOpen ? "show-overlay overlay" : " overlay"}>
        <div className="popup">
          <div className="message-container">
            <div className="message">Do you want to delete this job?</div>
          </div>
          <Form method="POST" action={`delete-job/${jobID}`}>
            <button className="btn">yes</button>
          </Form>

          <button className="btn delete-btn" onClick={setDeleteModal}>
            No
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default DeleteModal;
