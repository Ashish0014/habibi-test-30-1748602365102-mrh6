import React from 'react';

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, className }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className={`border border-gray-300 rounded p-2 ${className}`}
    />
  );
};

export default Input;