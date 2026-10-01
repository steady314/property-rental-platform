import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem(
      "propertyRentalCurrentUser"
    );
    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        "propertyRentalCurrentUser",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem(
        "propertyRentalCurrentUser"
      );
    }
  }, [user]);
  const register = (name, email, password) => {
    const storedUser = JSON.parse(
      localStorage.getItem("propertyRentalUser")
    );
    if (storedUser) {
      return {
        success: false,
        message: "An account already exists.",
      };
    }
    const newUser = {
      name,
      email,
      password,
    };
    localStorage.setItem(
      "propertyRentalUser",
      JSON.stringify(newUser)
    );
    setUser({
      name,
      email,
    });
    return {
      success: true,
    };
  };
  const login = (email, password) => {
    const storedUser = JSON.parse(
      localStorage.getItem("propertyRentalUser")
    );
    if (!storedUser) {
      return {
        success: false,
        message:
          "No account found. Please register first.",
      };
    }
    if (
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }
    setUser({
      name: storedUser.name,
      email: storedUser.email,
    });
    return {
      success: true,
    };
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  return useContext(AuthContext);
}
export {
  AuthProvider,
  useAuth,
};