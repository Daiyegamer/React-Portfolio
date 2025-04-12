import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    loggedIn: false,
    isAdmin: false,
    loading: true,
  });

  useEffect(() => {
    const API = import.meta.env.VITE_API_BASE;
  
    fetch(`${API}/user`, {
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        setAuth({
          loggedIn: true,
          isAdmin: data.isAdmin ?? false,
          loading: false,
        });
      })
      .catch(() => {
        setAuth({ loggedIn: false, isAdmin: false, loading: false });
      });
  }, []);
  

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
