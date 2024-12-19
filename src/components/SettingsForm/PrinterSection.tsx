import React from 'react';
import { TextField, Typography } from '@mui/material';

interface PrinterSectionProps {
  printer: { id: number | null };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrinterSection: React.FC<PrinterSectionProps> = ({ printer, onChange }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const parsedValue = value === '' ? null : parseInt(value, 10);
    const event = {
      target: {
        name,
        value: parsedValue,
      },
    };

    onChange(event as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <>
      <Typography variant="h6">Printer</Typography>
      <TextField
        label="Printer ID"
        variant="outlined"
        value={printer.id || ''}
        onChange={handleInputChange}
        name="printer.id"
        fullWidth
        margin="normal"
        type="number"
      />
    </>
  );
};

export default PrinterSection;