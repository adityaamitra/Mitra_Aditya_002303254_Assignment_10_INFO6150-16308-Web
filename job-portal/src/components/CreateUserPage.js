// /src/components/CreateUserPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../utils/api';
import Navbar from './Navbar';
import { Container, TextField, RadioGroup, FormControlLabel, Radio, Button, Typography, FormControl } from '@mui/material';

// Import Redux hooks
import { useDispatch } from 'react-redux';
import { setUser } from '../store'; // Import the action to set the user

function CreateUserPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('admin');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();  // Access Redux dispatch function

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    // Validate email and password
    if (!email.match(emailRegex)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!password.match(passwordRegex)) {
      setPasswordError('Password must be at least 6 characters long, contain one uppercase letter, one number, and one special character.');
      return;
    }

    try {
      const userData = { fullName, email, password, type };
      
      // Call API to create the user
      await createUser(userData);

      // Dispatch action to update Redux store with the new user
      dispatch(setUser(userData)); // Store user data in Redux

      alert('User created successfully');
      navigate('/admin'); // Navigate to admin dashboard
    } catch (error) {
      alert('Error creating user');
    }
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>Create New User</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
            error={!!emailError}
            helperText={emailError}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
            error={!!passwordError}
            helperText={passwordError}
          />

          <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
            <RadioGroup
              row
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <FormControlLabel value="admin" control={<Radio />} label="Admin" />
              <FormControlLabel value="employee" control={<Radio />} label="Employee" />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: 1.5 }}
          >
            Create User
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default CreateUserPage;
