import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface EventCardProps {
  name: string;
  description: string;
  location: string | null;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({ name, description, location, date }) => {
  return (
    <Card style={{ margin: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">Location: {location || 'TBD'}</Typography>
        <Typography variant="body2">Date: {new Date(date).toLocaleString()}</Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;