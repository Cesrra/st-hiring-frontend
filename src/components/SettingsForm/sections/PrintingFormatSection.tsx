import React from 'react';
import { PrintingFormat } from '../../../types';
import ToggleGroup from '../../common/ToggleGroup';

interface PrintingFormatProps {
  format: PrintingFormat;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrintingFormatSection: React.FC<PrintingFormatProps> = ({ format, onChange }) => {
  const options = [
    { label: 'Format A', name: 'printingFormat.formatA', checked: format.formatA },
    { label: 'Format B', name: 'printingFormat.formatB', checked: format.formatB },
  ];

  return <ToggleGroup options={options} onChange={onChange} title="Printing Format" />;
};

export default PrintingFormatSection;