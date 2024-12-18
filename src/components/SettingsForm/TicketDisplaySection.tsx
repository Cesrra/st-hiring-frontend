import React from 'react';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';

interface TicketDisplayProps {
  display: { leftInAllotment: boolean; soldOut: boolean };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TicketDisplaySection: React.FC<TicketDisplayProps> = ({ display, onChange }) => {
  return (
    <>
      <Typography variant="h6">Ticket Display</Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={display.leftInAllotment || false}
            onChange={onChange}
            name="ticketDisplay.leftInAllotment"
          />
        }
        label="Left in Allotment"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={display.soldOut || false}
            onChange={onChange}
            name="ticketDisplay.soldOut"
          />
        }
        label="Sold Out"
      />
    </>
  );
};

export default TicketDisplaySection;
