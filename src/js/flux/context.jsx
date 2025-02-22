import React, { createContext, useContext } from "react";
import useFlux from "./flux"; // Importa el store

// Crea el contexto
const Context = createContext(null);

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const { store, actions } = useFlux(); // Usa el store y las acciones

  return (
    <Context.Provider value={{ store, actions }}>
      {children}
    </Context.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  return useContext(Context);
};