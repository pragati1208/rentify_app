import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    setProperties((prevProperties) => [...prevProperties, property]);
  };

  return (
    <GlobalStateContext.Provider value={{ properties, addProperty }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
