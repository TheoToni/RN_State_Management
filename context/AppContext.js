import React, { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <AppContext.Provider value={{ count, increment, decrement }}>
      {children}
    </AppContext.Provider>
  );
};
