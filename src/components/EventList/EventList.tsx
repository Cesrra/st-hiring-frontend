import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography } from '@mui/material';
import { AppDispatch } from '../../store';
import { fetchEvents, selectEvents, selectEventsLoading, selectEventsError } from '../../store/slices/eventsSlice';
import EventCard from './EventCard';

const EventList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector(selectEvents);
  const loading = useSelector(selectEventsLoading);
  const error = useSelector(selectEventsError);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Grid container spacing={2} style={{ padding: '16px' }}>
      <Typography variant="h3" gutterBottom style={{ minWidth: "100vw", textAlign: "center", marginTop: "10px" }}>
        See Tickets
      </Typography>
      {events.map((event) => (
        <Grid item xs={12} sm={6} md={4} key={event.id}>
          <EventCard
            name={event.name}
            description={event.description}
            location={event.location}
            date={event.date}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EventList;