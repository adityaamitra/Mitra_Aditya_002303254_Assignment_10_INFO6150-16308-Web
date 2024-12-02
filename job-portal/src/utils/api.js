// /src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

export const createJob = async (jobData) => {
  const response = await axios.post(`${API_URL}/jobs/create/job`, jobData);
  return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/user/create`, userData);
  return response.data;
};

export const fetchJobs = async () => {
  const response = await axios.get(`${API_URL}/jobs/get/jobs`);
  return response.data;
};

export const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/users`);
      return response.data;  
    } catch (error) {
      throw new Error('Error fetching users: ' + error.message); 
    }
  };

