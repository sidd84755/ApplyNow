import React from 'react';
import { useState } from 'react';
import { 
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Search,
  LocationOn,
  WorkOutline,
  BusinessCenter,
  Twitter,
  LinkedIn,
  Facebook
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/Navbar';

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

const LandingPage = () => {
  
  return (
    <ThemeProvider theme={theme}>
      {/* Navigation Bar */}
      
      <Navbar />
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', py: 8, color: 'white' }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Find Your Dream Job with Ease
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                Connect with top employers and unlock career opportunities across industries
              </Typography>
              <Button variant="contained" color="secondary" size="large">
                Get Started
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img 
                src="https://via.placeholder.com/500x300" 
                alt="Job search" 
                style={{ width: '100%', borderRadius: '16px' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Search Section */}
      <Container sx={{ py: 6, transform: 'translateY(-50px)' }}>
        <Card elevation={4}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Job title or keywords"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  placeholder="Location"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  placeholder="Job Type"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WorkOutline />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button fullWidth variant="contained" color="secondary" size="large">
                  Search
                </Button>
              </Grid>
            </Grid>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button>Remote Jobs</Button>
              <Button>Full-time</Button>
              <Button>Internship</Button>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* Categories Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Explore Popular Categories
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {['Technology', 'Healthcare', 'Finance', 'Education', 'Marketing', 'Engineering'].map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Card sx={{ p: 3, '&:hover': { boxShadow: 6 } }}>
                <BusinessCenter sx={{ fontSize: 40, color: 'secondary.main' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>{category}</Typography>
                <Typography variant="body2" color="text.secondary">
                  1200+ Jobs Available
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Jobs Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Latest Job Postings
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} md={4} key={item}>
                <Card sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>JD</Avatar>
                    <div>
                      <Typography variant="h6">Senior React Developer</Typography>
                      <Typography variant="body2">Tech Corp Inc.</Typography>
                    </div>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    <LocationOn fontSize="small" /> New York, NY
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="outlined">Full Time</Button>
                    <Button variant="contained" color="secondary">Apply Now</Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button variant="outlined" size="large">
              View All Jobs
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>
                JobPortal
              </Typography>
              <Typography>
                Empowering job seekers and employers to connect seamlessly
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="h6" gutterBottom>For Candidates</Typography>
              <Typography>Browse Jobs</Typography>
              <Typography>Saved Jobs</Typography>
              <Typography>Profile</Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="h6" gutterBottom>For Employers</Typography>
              <Typography>Post Jobs</Typography>
              <Typography>Browse Candidates</Typography>
              <Typography>Pricing</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Connect With Us</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
                <IconButton sx={{ color: 'white' }}><LinkedIn /></IconButton>
                <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />
          <Typography align="center">
            © 2023 JobPortal. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;