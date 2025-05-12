import React from 'react';
import { Container, Typography } from '@mui/material';
import AnimatedPage from '../components/AnimatedPage';
const Home = () => {
  return (
     <AnimatedPage>
      <Container>
        <Typography variant="h3" gutterBottom>Strona główna</Typography>
        <Typography>To jest ogólna informacja o moim CV.</Typography>
      </Container>
    </AnimatedPage>
  );
};

export default Home;
