import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

const defaultUsers = [
  {
    id: 1,
    name: "Property Manager",
    email: "manager@propertyrental.com",
    password: "manager123",
    role: "manager",
  },
];

function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem(
      "propertyRentalUsers"
    );

    if (savedUsers) {
      return JSON.parse(savedUsers);
    }

    localStorage.setItem(
      "propertyRentalUsers",
      JSON.stringify(defaultUsers)
    );

    return defaultUsers;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem(
      "propertyRentalCurrentUser"
    );

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  useEffect(() => {
    localStorage.setItem(
      "propertyRentalUsers",
      JSON.stringify(users)
    );
  }, [users]);

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
    const emailExists = users.some(
      (existingUser) =>
        existingUser.email.toLowerCase() ===
        email.toLowerCase()
    );

    if (emailExists) {
      return {
        success: false,
        message:
          "An account with this email already exists.",
      };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role: "customer",
    };

    setUsers((currentUsers) => [
      ...currentUsers,
      newUser,
    ]);

    setUser({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });

    return {
      success: true,
    };
  };

  const login = (email, password) => {
    const foundUser = users.find(
      (existingUser) =>
        existingUser.email.toLowerCase() ===
          email.toLowerCase() &&
        existingUser.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    setUser({
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      role: foundUser.role,
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
        users,
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