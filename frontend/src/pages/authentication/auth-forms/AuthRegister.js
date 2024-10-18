import React, {useState} from 'react';
import { Button, TextField, Container } from '@mui/material';
import {fetchPostData} from 'client/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AuthRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('token');
    if (isLoggedIn) {
      navigate('/');
      window.location.reload();
    } 
  }, []);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    return password.length >= 6 && password.length <= 30;
  };

  const handleLogin = async () => {
    setErrors({ email: '', password: '' });

    if (!validateEmail()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
      return;
    }

    if (!validatePassword()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 6 characters, at most 30 characters' }));
      return;
    }
    // Register logic
    fetchPostData("/auth/users/add",{email,password})
    .then(() => {
      setLoginError('');    
      navigate('/login');
      
    }).catch((error) => {
      console.error('Registration error:', error);
      // Handle other registration errors
      setLoginError('An error occurred during registration');
  });

  };

    return (
      <Container component="main" maxWidth="xs">
          <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />
          <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Login
        </Button>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      </Container>
    );

};

export default AuthRegister;
