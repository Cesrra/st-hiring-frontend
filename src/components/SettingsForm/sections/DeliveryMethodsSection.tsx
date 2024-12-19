import React from 'react';
import { DeliveryMethod } from '../../../types';
import ToggleGroup from '../../common/ToggleGroup';


interface Props {
  deliveryMethods: DeliveryMethod[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DeliveryMethodsSection: React.FC<Props> = ({ deliveryMethods, handleChange }) => {
  const options = deliveryMethods.map((method, index) => ({
    label: method.name,
    name: `deliveryMethods[${index}].selected`,
    checked: method.selected,
  }));
  return <ToggleGroup options={options} onChange={handleChange} title="Delivery Methods" type="checkbox" />;
};

export default DeliveryMethodsSection;