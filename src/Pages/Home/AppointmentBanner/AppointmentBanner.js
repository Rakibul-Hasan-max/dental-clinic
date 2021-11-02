import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{width:400, marginTop: -110}} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box sx={{m: 1}}>
                        <Typography variant="h6" sx={{mb: 2}} style={{color: '#14DDCF'}}>
                        APPOINTMENT
                        </Typography>
                        <Typography variant="h4" sx={{mb: 2}} style={{color: 'white'}}>
                            Make an appointment today
                        </Typography>
                        <Typography variant="body1" sx={{mb: 5}} style={{color: 'white'}}>
                            A doctor's visit, also known as a physician office visit or a consultation, or a ward round in an inpatient care context
                        </Typography>
                        <Button variant="contained"style={{backgroundColor: '#14DDCF'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;