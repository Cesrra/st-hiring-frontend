import React from 'react';
import { TicketDisplay } from '../../../types';
import ToggleGroup from '../../common/ToggleGroup';

interface TicketDisplayProps {
  display: TicketDisplay;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TicketDisplaySection: React.FC<TicketDisplayProps> = ({ display, onChange }) => {
  const options = [
    { label: 'Left in Allotment', name: 'ticketDisplay.leftInAllotment', checked: display.leftInAllotment },
    { label: 'Sold Out', name: 'ticketDisplay.soldOut', checked: display.soldOut },
  ];

  return <ToggleGroup options={options} onChange={onChange} title="Ticket Display" />;
};

export default TicketDisplaySection;
