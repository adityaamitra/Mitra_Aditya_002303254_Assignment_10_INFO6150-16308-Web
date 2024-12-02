import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import CreateUserPage from './components/CreateUserPage';
import UsersPage from './components/UsersPage';
import LoginPage from './components/LoginPage';
import AvailableJobsPage from './components/AvailableJobsPage';
import AddJobPage from './components/AddJobPage'; 
import AuthRoute from './components/AuthRoute'; 
import EmployeePage from './components/EmployeePage';
import { Provider } from 'react-redux';
import store from './store'; 


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        
        <Route path="/" element={<LoginPage />} />
        
        <Route 
          path="/admin" 
          element={
            <AuthRoute>
              <AdminPage />
            </AuthRoute>
          } 
        />
        
        <Route 
          path="/create-user" 
          element={
            <AuthRoute>
              <CreateUserPage />
            </AuthRoute>
          } 
        />
        
        <Route 
          path="/users" 
          element={
            <AuthRoute>
              <UsersPage />
            </AuthRoute>
          } 
        />
        
        <Route 
          path="/employee" 
          element={
            <AuthRoute>
              <EmployeePage />
            </AuthRoute>
          } 
        />

        <Route 
          path="/available-jobs" 
          element={
            <AuthRoute>
              <AvailableJobsPage />
            </AuthRoute>
          } 
        />
        
        <Route 
          path="/add-job" 
          element={
            <AuthRoute>
              <AddJobPage />
            </AuthRoute>
          } 
        />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
