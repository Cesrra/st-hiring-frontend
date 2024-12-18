import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

interface DeliveryMethod {
  name: string;
  selected: boolean;
}

interface Props {
  deliveryMethods: DeliveryMethod[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DeliveryMethodsSection: React.FC<Props> = ({ deliveryMethods, handleChange }) => (
  <>
    <Typography variant="h6">Delivery Methods</Typography>
    {deliveryMethods.map((method, index) => (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            checked={method.selected || false}
            onChange={handleChange}
            name={`deliveryMethods[${index}].selected`}
          />
        }
        label={method.name}
      />
    ))}
  </>
);

export default DeliveryMethodsSection;