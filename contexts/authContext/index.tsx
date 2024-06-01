import { auth } from "@/app/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useContext, useEffect } from "react";

type AuthContextType = {
  currentUser: any;
  userLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

const AuthContext = React.createContext<AuthContextType>({
  currentUser: null,
  userLoggedIn: false,
  setUserLoggedIn: () => {}, // Provide a default no-op function
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
    setUserLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
