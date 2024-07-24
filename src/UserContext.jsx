// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUserData = localStorage.getItem('user-data');
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  // Update user data in localStorage whenever it changes
  useEffect(() => {
    if (userData) {
      localStorage.setItem('user-data', JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
