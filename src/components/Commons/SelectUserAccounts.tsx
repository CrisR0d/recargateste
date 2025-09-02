
import { useUserAccounts } from '@/hooks/user/useUserAccounts';
import { useController } from 'react-hook-form';

export const SelectInput = ({ name, label, control, defaultValue = '' }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue,
  });
  
  const { data, isPending, error } = useUserAccounts('');

  const accountOptions = [
    { value: '', label: 'Select an account' },
    { value: 'account1', label: 'Account 1' },
    { value: 'account2', label: 'Account 2' },
    { value: 'account3', label: 'Account 3' },
  ];

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm font-semibold text-white">{label}</label>
      <select
        id={name}
        value={value}
        onChange={onChange}
        className="p-2 rounded-lg text-black"
        style={{ backgroundColor: '#F0F0F0' }}
      >
        {accountOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};