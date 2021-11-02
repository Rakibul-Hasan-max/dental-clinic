import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Fluoride varnish is a highly concentrated form of fluoride which is applied to the tooths surface by a dentist, dental hygienist or other health care.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Dental restoration, dental fillings, or simply fillings, are treatments used to restore the function, integrity, and morphology of missing tooth structure resulting.',
        img: cavity
    },
    {
        name: 'Teeth  Whitening',
        description: 'Tooth whitening or tooth bleaching is the process of lightening the color of human teeth. Whitening is often desirable when teeth become yellowed.',
        img: whitening
    }
]

const Services = () => {
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'info.main' }} variant="h6" component="div">
                        OUR SERVICES
                    </Typography>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        Services We Provide
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;
