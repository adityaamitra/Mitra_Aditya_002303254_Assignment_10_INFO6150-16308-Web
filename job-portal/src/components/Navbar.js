
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

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
            Admin Dashboard
          </Typography>
          <div>
            
            <Button
              component={Link}
              to="/admin" 
              sx={{ color: 'white', marginRight: 2 }}
            >
              Home
            </Button>

            
            <Button
              component={Link}
              to="/create-user"
              sx={{ color: 'white', marginRight: 2 }}
            >
              Create User
            </Button>

            
            <Button
              component={Link}
              to="/users"
              sx={{ color: 'white', marginRight: 2 }}
            >
              Users
            </Button>

            
            <Button
              component={Link}
              to="/add-job" 
              sx={{ color: 'white', marginRight: 2 }}
            >
              Add Job
            </Button>

            
            <Button
              onClick={logout}
              sx={{ color: 'white' }}
            >
              Logout
            </Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
