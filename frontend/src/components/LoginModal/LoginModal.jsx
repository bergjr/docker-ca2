import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Alert,
  IconButton,
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../../context/AuthContext/AuthContext';

export const LoginModal = () => {
  const { loginDialogOpen, setLoginDialogOpen, setSignupDialogOpen, login, loginWithGoogle, authError, setAuthError } = useAuth();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const ok = await login(formState.email, formState.password);
    setLoading(false);
    if (ok) setFormState({ email: '', password: '' });
  };

  const handleClose = () => {
    setLoginDialogOpen(false);
    setAuthError('');
    setFormState({ email: '', password: '' });
  };

  const handleSwitchToSignup = () => {
    setLoginDialogOpen(false);
    setSignupDialogOpen(true);
    setAuthError('');
  };

  return (
    <Dialog open={loginDialogOpen} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ color: '#0f0d0dff', fontWeight: 'bold' }}>
        Login to MoodforFood
        <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Email" type="email" name="email" value={formState.email} onChange={handleChange} required fullWidth autoComplete="email" />
            <TextField label="Password" type="password" name="password" value={formState.password} onChange={handleChange} required fullWidth inputProps={{ minLength: 6 }} autoComplete="current-password" />
            {authError && <Alert severity="error">{authError}</Alert>}
            <Button
              fullWidth
              variant="outlined"
              onClick={loginWithGoogle}
              startIcon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18">
                  <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.6 39.7 16.3 44 24 44z"/>
                  <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.5-2.6 4.6-4.8 6l6.2 5.2C40.9 35.6 44 30.2 44 24c0-1.3-.1-2.7-.4-4z"/>
                </svg>
              }
              sx={{ textTransform: 'none', borderColor: 'divider' }}
            >
              Continue with Google
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
              <Box sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>or</Box>
              <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
            </Box>
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Link component="button" type="button" variant="body2" onClick={handleSwitchToSignup}>
                Don't have an account? Sign up
              </Link>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? 'Logging in…' : 'Login'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
