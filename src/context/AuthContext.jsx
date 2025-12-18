import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveToken = (newToken) => {
    setToken(newToken);
    sessionStorage.setItem("token", newToken);
  };

  const register = async (registration) => {
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registration),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "registration failed");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      throw error.message;
    }
  };

  const login = async (credentials) => {
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "login failed");
      }

      const data = await res.json();

      saveToken(data.token);
      setUser(data.user);
      sessionStorage.setItem("user", JSON.stringify(data.user));
      return data;
    } catch (error) {
      console.error(error.message);
      throw error.message;
    }
  };

  const logout = () => {
    try {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      setToken(null);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");

    try {
      setUser(JSON.parse(storedUser));
    } catch (error) {
      console.warn("Invalid user in sessionStorage, clearing!");
      sessionStorage.removeItem("user");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (!storedToken) {
      setLoading(false);
      return;
    }

    setToken(storedToken);

    fetch("http://localhost:5000/api/users/profile", {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    })
      .then(async (res) => {
        if (res.status === 401) {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("user");
          setUser(null);
          setToken(null);
          setLoading(false);
          return null;
        }

        if (!res.ok) {
          setLoading(false);
          return null;
        }

        return res.json();
      })
      .then((data) => {
        if (data?.user) {
          setUser((prev) => ({
            ...prev,
            ...data.user,
          }));
          sessionStorage.setItem(
            "user",
            JSON.stringify({ ...user, ...data.user })
          );
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Profile fetch failed:", err);
        setLoading(false);
      });
  }, []);

  const value = { token, login, user, setUser, logout, register, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
