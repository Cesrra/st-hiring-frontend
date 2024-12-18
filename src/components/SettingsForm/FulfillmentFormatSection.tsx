import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

interface FulfillmentFormat {
  rfid: boolean;
  print: boolean;
}

interface Props {
  fulfillmentFormat: FulfillmentFormat;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FulfillmentFormatSection: React.FC<Props> = ({ fulfillmentFormat, handleChange }) => (
  <>
    <Typography variant="h6">Fulfillment Format</Typography>
    <FormControlLabel
      control={
        <Checkbox
          checked={fulfillmentFormat.rfid || false}
          onChange={handleChange}
          name="fulfillmentFormat.rfid"
        />
      }
      label="RFID"
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={fulfillmentFormat.print || false}
          onChange={handleChange}
          name="fulfillmentFormat.print"
        />
      }
      label="Print"
    />
  </>
);

export default FulfillmentFormatSection;