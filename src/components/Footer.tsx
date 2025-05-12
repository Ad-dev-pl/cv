// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        textAlign: 'center',
        py: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Adrian Drużdż • Strona CV
      </Typography>
    </Box>
  );
};

export default Footer;
