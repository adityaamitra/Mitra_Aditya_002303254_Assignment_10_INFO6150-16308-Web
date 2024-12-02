
import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../utils/api';
import { AppBar, Toolbar, Typography, Button, Container, Box, Card, CardContent, CardActions, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function AvailableJobsPage() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (error) {
        alert('Error fetching jobs');
      }
    };

    getJobs();
  }, []);

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    navigate('/'); // Navigate back to login page
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              Employee Dashboard
            </Typography>
            <Box>
              <Button
                component={Link}
                to="/employee" // Home route for employee
                sx={{ color: 'white', marginRight: 2 }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/available-jobs" // Available Jobs page
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

      {/* Available Jobs Content */}
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Available Jobs
        </Typography>

        {jobs.length > 0 ? (
          <Grid container spacing={4}>
            {jobs.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job._id}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h6">{job.jobTitle}</Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      {job.companyName}
                    </Typography>
                    <Typography variant="body2">{job.description}</Typography>
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                      Salary: ${job.salary}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="primary" fullWidth>
                      Apply
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No available jobs at the moment.</Typography>
        )}
      </Container>
    </div>
  );
}

export default AvailableJobsPage;
