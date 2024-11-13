import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ original, loading, isFormBtn }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button
      type="submit"
      className={`btn btn-block ${isFormBtn && "form-btn"}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? loading : original}
    </button>
  );
};

export default SubmitBtn;
