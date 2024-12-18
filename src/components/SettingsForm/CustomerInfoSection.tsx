import React from 'react';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';

interface CustomerInfoProps {
  info: { active: boolean; basicInfo: boolean; addressInfo: boolean };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomerInfoSection: React.FC<CustomerInfoProps> = ({ info, onChange }) => {
  return (
    <>
      <Typography variant="h6">Customer Info</Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={info.active || false}
            onChange={onChange}
            name="customerInfo.active"
          />
        }
        label="Active"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={info.basicInfo || false}
            onChange={onChange}
            name="customerInfo.basicInfo"
          />
        }
        label="Basic Info"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={info.addressInfo || false}
            onChange={onChange}
            name="customerInfo.addressInfo"
          />
        }
        label="Address Info"
      />
    </>
  );
};

export default CustomerInfoSection;