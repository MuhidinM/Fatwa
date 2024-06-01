import { auth } from "@/app/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useContext, useEffect } from "react";

type AuthContextType = {
  currentUser: any;
  userLoggedIn: boolean;
  loading: boolean;
};

const AuthContext = React.createContext<AuthContextType>({
  currentUser: null,
  userLoggedIn: false,
  loading: true,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: any) {
    if (user) {
      setUserLoggedIn(true);
      setCurrentUser({ ...user });
    } else {
      setUserLoggedIn(false);
      setCurrentUser(null);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
