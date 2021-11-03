import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Box, Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
         <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{...verticalCenter, textAlign: 'left'}} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" sx={{mb: 2, fontSize: 45, fontWeight: 500}}>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="body2" sx={{fontSize: 14, color: 'gray', mb: 5}}>
                            Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral health.
                        </Typography>
                        <Button variant="contained"style={{backgroundColor: '#14DDCF'}}>GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width: '500px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
