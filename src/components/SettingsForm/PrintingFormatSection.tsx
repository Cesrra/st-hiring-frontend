import React from 'react';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';

interface PrintingFormatProps {
  format: { formatA: boolean; formatB: boolean };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrintingFormatSection: React.FC<PrintingFormatProps> = ({ format, onChange }) => {
  return (
    <>
      <Typography variant="h6">Printing Format</Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={format.formatA || false}
            onChange={onChange}
            name="printingFormat.formatA"
          />
        }
        label="Format A"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={format.formatB || false}
            onChange={onChange}
            name="printingFormat.formatB"
          />
        }
        label="Format B"
      />
    </>
  );
};

export default PrintingFormatSection;