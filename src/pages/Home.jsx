import React from 'react';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }
      }}
    >
      <img 
        src="/images/hero-bg.jpg" 
        alt="hero"
      />
    </Box>
  );
};

export default Home;