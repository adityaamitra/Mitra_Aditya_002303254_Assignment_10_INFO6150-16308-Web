
import React from 'react';
import Navbar from './Navbar'; 
import { Box, Typography, Container } from '@mui/material';

function AdminPage() {
  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="lg" sx={{ marginTop: 4 }}>
        <Box sx={styles.dashboardContainer}>
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>
          <Typography variant="h6">
            Welcome, Admin!
          </Typography>
        </Box>
      </Container>
    </div>
  );
}


const styles = {
  dashboardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 2,
    boxShadow: 3,
    backgroundColor: '#fff', 
  },
};

export default AdminPage;
