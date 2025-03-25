import React from 'react'
import { useState } from 'react';
import { 
    AppBar,
    Toolbar,
    Button,
    Container,
    Typography,
    IconButton,
    Box,
    useMediaQuery,
    List,
    ListItem,
    ListItemText,
    Drawer
  } from '@mui/material';

import { Menu as MenuIcon } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#2B3445',
      },
      secondary: {
        main: '#FF6B6B',
      },
    },
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
  });

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  // useMediaQuery to determine if the screen size is small
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Navigation links that will be rendered in both places.
  const navLinks = (
    <>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Jobs" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Companies" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Post a Job" />
      </ListItem>
    </>
  );
  return (
    <AppBar position="static" color="default" elevation={1}>
        <Container>
          <Toolbar>
            <Typography 
              variant="h4" 
              sx={{ flexGrow: 1, fontWeight: 'bold', color: 'primary.main' }}
            >
              ApplyNow
            </Typography>

            {isMobile ? (
              <>
                <IconButton 
                  edge="start" 
                  color="inherit" 
                  onClick={toggleDrawer(true)}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <List>
                      {navLinks}
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
              <>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Jobs</Button>
                <Button color="inherit">Companies</Button>
                <Button variant="contained" color="secondary">
                  Post a Job
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Navbar

