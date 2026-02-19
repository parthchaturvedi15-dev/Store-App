"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("shop_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
  const response = await fetch("http://localhost:5000/api/auth/Login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { success: false, error: data.message };
  }

  const userData = {
    id: data.user.id,
    name: data.user.firstName,
    email: data.user.email,
    role: data.user.role,
  };

  setUser(userData);
  localStorage.setItem("shop_user", JSON.stringify(userData));

  return { success: true, user: userData };
};

  const signup = async (firstName, lastName, email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/Signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const userData = {
          id: data.user.id,
          name: firstName,
          email: data.user.email,
          role: data.user.role,
          profileImage: "/profileimage.jpg"
        };
        setUser(userData);
        localStorage.setItem("shop_user", JSON.stringify(userData));

        return { success: true, user: userData };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: "Signup failed" };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("shop_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};