import React from 'react';

interface FormInputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error: string | null;
}

const FormInput: React.FC<FormInputProps> = ({ label, id, type, placeholder, name, value, onChange, error }) => (
  <div className="col-md-6">
    <label className="small mb-1" htmlFor={id}>
      {label}
    </label>
    <input
      className={`form-control ${error ? 'is-invalid' : ''}`}
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default FormInput;
