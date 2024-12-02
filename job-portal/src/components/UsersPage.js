// /src/components/UsersPage.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../utils/api';
import Navbar from './Navbar'; // Import Navbar component
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
} from '@mui/material';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // New state for handling errors
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        console.log("Fetched users:", data); // Debug: Log fetched data
        setUsers(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching users:", error); // Log detailed error
        setError("Error fetching users"); // Set error message to show in UI
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="lg" sx={{ marginTop: 4 }}>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            Users
          </Typography>

          {/* Display error if there is one */}
          {error && <Alert severity="error">{error}</Alert>}

          {/* Show loading spinner while data is being fetched */}
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer component={Paper} sx={{ marginTop: 4 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Full Name</strong></TableCell>
                    <TableCell><strong>Email</strong></TableCell>
                    <TableCell><strong>Role</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <TableRow key={user._id}>
                        <TableCell>{user.fullName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.type}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan="3" align="center">No users found</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default UsersPage;
