import React, { createContext, useContext } from 'react';

const defaultAuthState = {
  user: null,
  authReady: true,
  getToken: async () => null,
  loginDialogOpen: false,
  signupDialogOpen: false,
  setLoginDialogOpen: () => {},
  setSignupDialogOpen: () => {},
  authError: '',
  setAuthError: () => {},
  login: async () => false,
  loginWithGoogle: async () => false,
  signup: async () => false,
  logout: () => {},
};

const AuthContext = createContext(defaultAuthState);

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={defaultAuthState}>
    {children}
  </AuthContext.Provider>
);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);