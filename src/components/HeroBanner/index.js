import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroBanner = () => {
    return(
        <Box display='flex' justifyContent='center' alignItems='center' margin='1rem' marginTop='3rem'>
            <Box display='flex' flexDirection='column' justifyContent='center' padding='1rem' marginRight='2rem' color='white'>
                <Typography style={{ fontSize: '3rem', padding:'1rem'}}> 
                    find your next home
                </Typography>
                <Typography style={{ fontSize: '2rem', padding:'1rem'}}> 
                    favorite it
                </Typography>
                <Typography style={{ fontSize: '2rem', padding:'1rem'}}> 
                    move into it
                </Typography>
            </Box>
            <Box className='herobanner'>
                <img src='../../../public/assets/house.jpg' />
            </Box>
        </Box>
    )
};

export default HeroBanner;