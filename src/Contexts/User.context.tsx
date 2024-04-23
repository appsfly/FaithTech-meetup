import React, { createContext, useState, ReactNode } from "react";

// Define the default value type explicitly
const defaultValue: UserProviderInterface = {
  user: null,
  login: () => {},
  logout: () => {},
};

// Create context
export const UserContext = createContext<UserProviderInterface>(defaultValue);

// Define UserProviderInterface
interface UserProviderInterface {
  user: IUserProvider | null;
  login: (user: IUserProvider | null) => void;
  logout: () => void;
}

// Define IUserProvider interface
interface IUserProvider {
  _id: string;
  firstName: string;
}

// Create provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // State to hold user data
  const [user, setUser] = useState<IUserProvider | null>(null);

  // Function to handle user login
  const login = (userData: IUserProvider | null) => {
    setUser(userData);
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
  };

  // Value to be provided by context
  const contextValue: UserProviderInterface = {
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
