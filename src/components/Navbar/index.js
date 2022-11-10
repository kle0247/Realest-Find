import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';


const NavBar = () => {
    return(
        <Box display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center'>
            <Box className='crop'>
                <img src='../../../public/assets/logo/logo_white.png'/>
            </Box>
            <Box style={{ padding: '1rem'}}>
                <Typography>
                    <Link to='/buy'>Buy</Link>
                    <Link to='/rent'>Rent</Link>
                    <Link to='/login'>Sign in</Link>
                </Typography>
            </Box>
        </Box>
    )
};

export default NavBar;