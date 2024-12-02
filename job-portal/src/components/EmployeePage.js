// /src/components/EmployeePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Employee Dashboard
          </Typography>
          <Box>
            <Button
              onClick={() => navigate('/available-jobs')}
              sx={{ color: 'white', marginRight: 2 }}
            >
              Available Jobs
            </Button>
            <Button
              onClick={logout}
              sx={{ color: 'white' }}
            >
              Logout
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

function EmployeePage() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Employee Dashboard
        </Typography>
        <Typography variant="body1">
          Here you can explore available job opportunities and manage your profile.
        </Typography>
      </Container>
    </div>
  );
}

export default EmployeePage;
