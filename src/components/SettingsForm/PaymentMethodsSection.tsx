import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

interface PaymentMethods {
  cash: boolean;
  creditCard: boolean;
  comp: boolean;
}

interface Props {
  paymentMethods: PaymentMethods;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentMethodsSection: React.FC<Props> = ({ paymentMethods, handleChange }) => (
  <>
    <Typography variant="h6">Payment Methods</Typography>
    <FormControlLabel
      control={
        <Checkbox
          checked={paymentMethods.cash || false}
          onChange={handleChange}
          name="paymentMethods.cash"
        />
      }
      label="Cash"
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={paymentMethods.creditCard || false}
          onChange={handleChange}
          name="paymentMethods.creditCard"
        />
      }
      label="Credit Card"
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={paymentMethods.comp || false}
          onChange={handleChange}
          name="paymentMethods.comp"
        />
      }
      label="Comp"
    />
  </>
);

export default PaymentMethodsSection;