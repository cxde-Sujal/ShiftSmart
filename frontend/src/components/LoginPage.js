import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import './LoginPage.css';

const LoginPage = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('User ID:', userId);
        console.log('Password:', password);
        // Add your login logic here (e.g., API call for authentication)
    };

    return (
        <Box className="login-container">
            <Paper elevation={3} className="login-paper">
                <Typography variant="h5" className="login-header">
                    Login
                </Typography>
                <form noValidate autoComplete="off">
                    <TextField
                        label="User ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="login-textfield"
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-textfield"
                    />
                    <Button
                        className="login-button"
                        variant="contained"
                        fullWidth
                        onClick={handleLogin}
                        sx={{
                            backgroundColor: '#045656', // Button color
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#034f4f', // Darker shade for hover
                            },
                        }}
                    >
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default LoginPage;