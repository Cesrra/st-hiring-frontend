import React from 'react';
import { Scanning } from '../../../types';
import ToggleGroup from '../../common/ToggleGroup';

interface ScanningProps {
  scanning: Scanning;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ScanningSection: React.FC<ScanningProps> = ({ scanning, handleChange }) => {
  const options = [
    { label: 'Scan Manually', name: 'scanning.scanManually', checked: scanning.scanManually },
    { label: 'Scan When Complete', name: 'scanning.scanWhenComplete', checked: scanning.scanWhenComplete },
  ];

  return <ToggleGroup options={options} onChange={handleChange} title="Scanning" />;
};

export default ScanningSection;