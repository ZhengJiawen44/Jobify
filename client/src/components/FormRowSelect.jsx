const FormRowSelect = ({ id, label, values, defaultValue }) => {
  return (
    <div className="form-row">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        name={id}
        id={id}
        className="form-row form-select"
        defaultValue={defaultValue}
      >
        {values.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
