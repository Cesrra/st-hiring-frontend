import React from 'react';
import { CustomerInfo } from '../../../types';
import ToggleGroup from '../../common/ToggleGroup';

interface CustomerInfoProps {
  info: CustomerInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomerInfoSection: React.FC<CustomerInfoProps> = ({ info, onChange }) => {
  const options = [
    { label: 'Active', name: 'customerInfo.active', checked: info.active },
    { label: 'Basic Info', name: 'customerInfo.basicInfo', checked: info.basicInfo },
    { label: 'Address Info', name: 'customerInfo.addressInfo', checked: info.addressInfo },
  ];
  
  return <ToggleGroup options={options} onChange={onChange} title="Customer Info" />;
};

export default CustomerInfoSection;