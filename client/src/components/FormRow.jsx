const FormRow = ({ name, label, value, type }) => {
  return (
    <div className="form-row">
      <label for={name} className="form-label">
        {label || name}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        id={name}
        value={value || ""}
        required
      ></input>
    </div>
  );
};
export default FormRow;
