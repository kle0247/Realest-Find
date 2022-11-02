import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const NavBar = () => {
    return(
        <Box>
            <Link to='/buy'>Buy</Link>
            <Link to='/rent'>Rent</Link>
            <Link to='/login'>Sign in</Link>
        </Box>
    )
};

export default NavBar;