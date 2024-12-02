import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createJob } from '../utils/api';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import Navbar from './Navbar'; // Import the Navbar component

function AddJobPage() {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobData = { companyName, jobTitle, description, salary };
      await createJob(jobData);
      alert('Job created successfully');
      navigate('/admin'); // Navigate back to the admin page
    } catch (error) {
      alert('Error creating job');
    }
  };

  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Form Content */}
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Add New Job
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Company Name"
              variant="outlined"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Job Title"
              variant="outlined"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              required
              multiline
              rows={4}
            />
            <TextField
              label="Salary"
              variant="outlined"
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              fullWidth
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Add Job
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
}

export default AddJobPage;
