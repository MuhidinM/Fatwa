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
  setUserLoggedIn: () => {}, // Default no-op function
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      if (user) {
        setCurrentUser(user);
        setUserLoggedIn(true);
        console.log("User is logged in, setting userLoggedIn to true");
      } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
        console.log("User is not logged in, setting userLoggedIn to false");
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

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
