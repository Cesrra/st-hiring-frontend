import React from 'react';
import { TextField, Typography } from '@mui/material';

interface PrinterSectionProps {
  printer: { id: number | null };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrinterSection: React.FC<PrinterSectionProps> = ({ printer, onChange }) => {
  return (
    <>
      <Typography variant="h6">Printer</Typography>
      <TextField
        label="Printer ID"
        variant="outlined"
        value={printer.id || ''}
        onChange={onChange}
        name="printer.id"
        fullWidth
        margin="normal"
      />
    </>
  );
};

export default PrinterSection;