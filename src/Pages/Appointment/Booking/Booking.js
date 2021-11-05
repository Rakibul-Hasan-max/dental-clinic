import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

const Booking = ({booking}) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{padding: "40px"}}>
                <Typography sx={{ color: '#14DDCF', fontWeight: 600, mb:1 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button variant="contained" sx={{mt:2}} style={{backgroundColor: '#14DDCF'}}>BOOK APPOINTMENT</Button>
            </Paper>
        </Grid>
    );
};

export default Booking;
// onClick={handleBookingOpen}