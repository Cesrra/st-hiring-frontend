import React from 'react';
import { FulfillmentFormat } from '../../../types';
import ToggleGroup from '../../common/ToggleGroup';

interface Props {
  fulfillmentFormat: FulfillmentFormat;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FulfillmentFormatSection: React.FC<Props> = ({ fulfillmentFormat, handleChange }) => {
  const options = [
    { label: 'RFID', name: 'fulfillmentFormat.rfid', checked: fulfillmentFormat.rfid },
    { label: 'Print', name: 'fulfillmentFormat.print', checked: fulfillmentFormat.print },
  ];

  return <ToggleGroup options={options} onChange={handleChange} title="Fulfillment Format" />;
};

export default FulfillmentFormatSection;