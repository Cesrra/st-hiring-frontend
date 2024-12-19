import React from 'react';
import { PaymentMethods } from '../../../types';
import ToggleGroup from '../../common/ToggleGroup';

interface Props {
  paymentMethods: PaymentMethods;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PaymentMethodsSection: React.FC<Props> = ({ paymentMethods, handleChange }) => {
  const options = [
    { label: 'Cash', name: 'paymentMethods.cash', checked: paymentMethods.cash },
    { label: 'Credit Card', name: 'paymentMethods.creditCard', checked: paymentMethods.creditCard },
    { label: 'Comp', name: 'paymentMethods.comp', checked: paymentMethods.comp },
  ];

  return <ToggleGroup options={options} onChange={handleChange} title="Payment Methods" />;
};


export default PaymentMethodsSection;