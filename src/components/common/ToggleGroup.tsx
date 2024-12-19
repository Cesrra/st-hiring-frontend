import React from 'react';
import { FormControlLabel, Checkbox, Typography, Switch } from '@mui/material';

type ToggleType = 'checkbox' | 'switch';

interface ToggleOption {
  label: string;
  name: string;
  checked: boolean;
}

interface ToggleGroupProps {
  options: ToggleOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  type?: ToggleType;
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({ options, onChange, title, type = 'switch' }) => {
  const Control = type === 'checkbox' ? Checkbox : Switch;

  return (
    <div>
      {title && <Typography variant="h6">{title}</Typography>}
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          control={
            <Control
              checked={option.checked}
              onChange={onChange}
              name={option.name}
            />
          }
          label={option.label}
        />
      ))}
    </div>
  );
};

export default ToggleGroup;
