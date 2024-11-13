const FormRow = ({ id, type, label, value }) => {
  return (
    <div className="form-row">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="form-input"
        defaultValue={value || ""}
      ></input>
    </div>
  );
};
export default FormRow;
