// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';

const AuthContext = createContext(undefined);

// Map Firebase Auth error codes to human-readable messages
function firebaseErrorMessage(code) {
  switch (code) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Invalid email or password';
    case 'auth/email-already-in-use':
      return 'Email already in use';
    case 'auth/weak-password':
      return 'Password must be at least 6 characters';
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/too-many-requests':
      return 'Too many attempts — please try again later';
    default:
      return 'Something went wrong. Please try again.';
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false); // true once Firebase resolves on load
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [signupDialogOpen, setSignupDialogOpen] = useState(false);
  const [authError, setAuthError] = useState('');

  // Keep user in sync with Firebase Auth session
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid:   firebaseUser.uid,
          name:  firebaseUser.displayName || firebaseUser.email.split('@')[0],
          email: firebaseUser.email,
        });
      } else {
        setUser(null);
      }
      setAuthReady(true);
    });
    return unsubscribe;
  }, []);

  // Stable reference — always fetches a fresh token from auth.currentUser
  const getToken = useCallback(async () => {
    const firebaseUser = auth.currentUser;
    if (!firebaseUser) return null;
    return firebaseUser.getIdToken();
  }, []);

  const login = async (email, password) => {
    setAuthError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginDialogOpen(false);
      return true;
    } catch (err) {
      setAuthError(firebaseErrorMessage(err.code));
      return false;
    }
  };

  const signup = async (name, email, password) => {
    setAuthError('');
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(credential.user, { displayName: name });
      setSignupDialogOpen(false);
      return true;
    } catch (err) {
      setAuthError(firebaseErrorMessage(err.code));
      return false;
    }
  };

  const loginWithGoogle = async () => {
    setAuthError('');
    try {
      await signInWithPopup(auth, googleProvider);
      setLoginDialogOpen(false);
      setSignupDialogOpen(false);
      return true;
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setAuthError(firebaseErrorMessage(err.code));
      }
      return false;
    }
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        authReady,
        getToken,
        loginDialogOpen,
        signupDialogOpen,
        setLoginDialogOpen,
        setSignupDialogOpen,
        authError,
        setAuthError,
        login,
        loginWithGoogle,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};