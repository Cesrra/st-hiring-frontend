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
    <Card sx={{ margin: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" color="text.primary">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">
          Location: {location || 'TBD'}
        </Typography>
        <Typography variant="body2">
          Date: {new Date(date).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;