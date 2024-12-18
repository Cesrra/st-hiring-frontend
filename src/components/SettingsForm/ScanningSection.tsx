import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

interface Scanning {
  scanManually: boolean;
  scanWhenComplete: boolean;
}

interface Props {
  scanning: Scanning;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ScanningSection: React.FC<Props> = ({ scanning, handleChange }) => (
  <>
    <Typography variant="h6">Scanning</Typography>
    <FormControlLabel
      control={
        <Checkbox
          checked={scanning.scanManually || false}
          onChange={handleChange}
          name="scanning.scanManually"
        />
      }
      label="Scan Manually"
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={scanning.scanWhenComplete || false}
          onChange={handleChange}
          name="scanning.scanWhenComplete"
        />
      }
      label="Scan When Complete"
    />
  </>
);

export default ScanningSection;