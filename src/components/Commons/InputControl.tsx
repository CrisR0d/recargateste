
import React from 'react';
import { useController } from 'react-hook-form';

export const TextInput = ({ name, label, control, placeholder, defaultValue = '' }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm font-semibold text-white">{label}</label>
      <input
        type="text"
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 rounded-lg text-black"
        style={{ backgroundColor: '#F0F0F0' }}
      />
    </div>
  );
};
