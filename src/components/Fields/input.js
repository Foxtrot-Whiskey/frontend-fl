import React from "react";

const InputField = ({
  label,
  value,
  type,
  name,
  options,
  placeholder,
  disabled,
  onChange
}) => (
  <div className="Field">
    <label className="label">{label}</label>
    <input
      type={type}
      className="input"
      name={name}
      onChange={onChange}
      list={options ? name : null}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
    />
    {options && (
      <datalist id={name}>
        {options.map(option => <option key={option} value={option} />)}
      </datalist>
    )}
  </div>
);

export default InputField;
