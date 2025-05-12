import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ColorModeContext } from '../theme/ColorModeContext';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/experience">Doświadczenie</Button>
        <Button color="inherit" component={Link} to="/projects">Projekty</Button>
        <Button color="inherit" component={Link} to="/contact">Kontakt</Button>
        <Button color="inherit" component={Link} to="/calendar">Kalendarz</Button>

        <IconButton
          sx={{ marginLeft: 'auto' }}
          color="inherit"
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
