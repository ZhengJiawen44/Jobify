const FormRow = ({ labelTxt, name, type, value }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelTxt || name}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        value={value || ""}
        required
      />
    </div>
  );
};
export default FormRow;
