'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from './firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set Firebase auth persistence on mount
  useEffect(() => {
    setPersistence(auth, browserLocalPersistence).catch(console.error);
  }, []);

  // Listen for auth state changes - NO automatic redirects
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('🔍 Auth state changed on app.quicksync.online:', {
        user: user ? { uid: user.uid, email: user.email } : null,
        hostname: window.location.hostname,
        authDomain: auth.config.authDomain
      });
      
      setUser(user);
      setLoading(false);
      
      // Optional: Redirect non-authenticated users to landing page
      if (!user && window.location.hostname === 'app.quicksync.online') {
        // Only redirect if user is on a protected route
        const protectedRoutes = ['/dashboard', '/profile', '/settings'];
        const currentPath = window.location.pathname;
        
        if (protectedRoutes.some(route => currentPath.startsWith(route))) {
          console.log('🚫 No user found, redirecting to main site from protected route');
          window.location.href = 'https://www.quicksync.online';
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Create user doc if not exists
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          createdAt: serverTimestamp(),
        });
      }

      // Only redirect to app.quicksync.online if user is on the landing page
      if (window.location.hostname === 'quicksync.online' || window.location.hostname === 'www.quicksync.online') {
        window.location.href = 'https://app.quicksync.online';
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      
      // Redirect to landing page after logout from app
      if (window.location.hostname === 'app.quicksync.online') {
        window.location.href = 'https://www.quicksync.online';
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}